import { LOGIN_ROUTE } from "../utills/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Chat,
  },
];
