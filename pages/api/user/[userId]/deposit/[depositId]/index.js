import nc from "next-connect";
import { attachProfileById } from "../../../../../../controllers/user.controller";
import database from "../../../../../../middleware/database";
import {
  approveDeposit,
  attachDeposit,
  deleteDeposit,
} from "../../../../../../controllers/deposit.controller";

const handler = nc({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("internal server error");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("route is not found");
  },
  attachParams: true,
})
  .use(database)
  .use(attachProfileById)
  .use(attachDeposit)
  .post(approveDeposit)
  .delete(deleteDeposit);

export default handler;
