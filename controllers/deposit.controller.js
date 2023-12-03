import response from "../apiUtil/reponses";
import config from "../config/config";
import sampleMailTemplate from "../helpers/sampleMailTemplate";
import sendMail from "../helpers/sendVerificationMail";
import Deposit from "../models/deposit.model";
import Transaction from "../models/transaction.model";
import User from "../models/user.model";
import { fCurrency } from "../utils/formatNumber";

export const deposit = async (req, res) => {
  const profile = req.profile;
  let deposit = new Deposit({
    userId: req.profile._id,
    status: "pending",
    ...req.body,
  });
  let loginLink = `https://${config.domain}/login`;
  const message = `${profile.firstName}, you just made a Deposit of ${req.body.amount} which is currently awaiting approval within the next 12 hrs.`;
  let msg = sampleMailTemplate(profile.firstName, loginLink, message);

  await sendMail(msg, "Deposit Created", profile.email);

  try {
    const result = await deposit.save();
    if (result) {
      response(res, 200, "Deposit success", result);
    }
  } catch (err) {
    return response(res, 500, "failure", null);
  }
};

export const approveDeposit = async (req, res) => {
  const depositId = req.deposit._id;
  const deposit = req.deposit;
  const profile = req.profile;
  let loginLink = `https://${config.domain}/login`;
  try {
    const session = await req.db.startSession();
    await session.withTransaction(async () => {
      const updatedDeposit = await Deposit.findByIdAndUpdate(
        depositId,
        {
          approvedDate: Date.now(),
          status: "approved",
        },
        { session, new: true }
      ).exec();

      const message = `${profile.firstName}, your deposit of $${
        deposit.amount
      } has been approved and you can now invest up to ${fCurrency(
        profile.accountBalance + req.deposit.capital
      )} now.`;
      let msg = sampleMailTemplate(profile.firstName, loginLink, message);

      await sendMail(msg, "Deposit Update", profile.email);
      await User.findByIdAndUpdate(
        req.profile,
        {
          $inc: {
            accountBalance: parseInt(deposit.amount),
          },
        },
        {
          session,
          new: true,
          runValidators: true,
        }
      );

      await Transaction.create(
        [
          {
            amount: deposit.amount,
            depositId,
            currentBalance: req.profile.accountBalance,
            type: "deposit",
            userId: req.profile._id,
          },
        ],
        { session }
      );
    });

    await session.commitTransaction();
    session.endSession();
    return response(res, 200, "deposit approved.");
  } catch (err) {
    console.log(err);
    return response(res, 500, "failure", null);
  }
};

export const attachDeposit = async (req, res, next) => {
  const { depositId } = req.query;
  const { query, params } = req;
  console.log({ query, params });
  try {
    const deposit = await Deposit.findById(depositId).lean();
    console.log({ deposit, depositId });
    if (deposit) {
      req.deposit = deposit;
      next();
    } else {
      return response(res, 404, "not found", null);
    }
  } catch (err) {
    return response(res, 500, "server error", err.message);
  }
};

export const deleteDeposit = async (req, res) => {
  try {
    const depositId = req.deposit._id;
    let deposit = await Deposit.findByIdAndDelete(depositId);
    return response(res, 200, "deleted successfully", deposit);
  } catch (err) {
    return response(res, 500, "failure", null);
  }
};
