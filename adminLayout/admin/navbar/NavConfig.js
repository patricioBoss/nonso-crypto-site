// components
import SvgIconStyle from "../../../components/SvgIconStyle";
import { FiHome } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
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
  deposit: <RiMoneyDollarCircleLine />,
  withdrawal: <BsCreditCard2Back />,
  mail: <HiMail />,
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      { title: "userList", path: "/admin/home", icon: ICONS.user },
      { title: "Investments", path: "/admin/invest", icon: ICONS.analytics },
      {
        title: "Withdrawal",
        path: "/admin/withdrawal",
        icon: ICONS.withdrawal,
      },
      { title: "Mail", path: "/admin/mail", icon: ICONS.mail },
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
