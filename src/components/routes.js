import { LOGIN_ROUTE } from "../utills/consts";
import Login from "./Login";
import { CHAT_ROUTE } from "../utills/consts";
import Chat from "./Chat";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
