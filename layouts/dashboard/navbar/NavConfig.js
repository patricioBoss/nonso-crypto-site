// components
import SvgIconStyle from "../../../components/SvgIconStyle";
import { FiHome } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCreditCard2Back, BsFillHddStackFill } from "react-icons/bs";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon("ic_user"),
  analytics: getIcon("ic_analytics"),
  dashboard: <FiHome />,
  wallet: <GiWallet />,
  settings: <AiFillSetting />,
  withdrawal: <BsCreditCard2Back />,
  portfolio: <BsFillHddStackFill />,
  affiliate: <UserGroupIcon />,
  realestate: <HomeModernIcon />,
  deposit: <RiMoneyDollarCircleLine />,
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      { title: "Dashboard", path: "/dashboard/home", icon: ICONS.dashboard },
      {
        title: "Investments",
        path: "/dashboard/invest",
        children: [
          { title: "Invest", path: "/dashboard/invest/" },
          { title: "Investments", path: "/dashboard/invest/all" },
        ],
        icon: ICONS.analytics,
      },
      { title: "Wallet", path: "/dashboard/wallet", icon: ICONS.wallet },

      {
        title: "Withdrawal",
        path: "/dashboard/withdrawal",
        icon: ICONS.withdrawal,
      },
      {
        title: "Deposit",
        path: "/dashboard/deposit",
        children: [
          { title: "Make Deposit", path: "/dashboard/deposit/create" },
          { title: "All Deposits", path: "/dashboard/deposit/list" },
        ],
        icon: ICONS.deposit,
      },
    ],
  },

  {
    subheader: "Tools",
    items: [
      {
        title: "Affiliate",
        path: "/dashboard/referral",
        children: [
          { title: "Affiliate users", path: "/dashboard/referral/list" },
          {
            title: "Affiliate commissions",
            path: "/dashboard/referral/commission",
          },
        ],
        icon: ICONS.affiliate,
      },
      { title: "Settings", path: "/dashboard/profile", icon: ICONS.settings },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     {
  //       title: 'user',
  //       path: '/dashboard/user',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: '/dashboard/user/four' },
  //         { title: 'Five', path: '/dashboard/user/five' },
  //         { title: 'Six', path: '/dashboard/user/six' },
  //       ],
  //     },
  //   ],
  // },
];

export default sidebarConfig;
