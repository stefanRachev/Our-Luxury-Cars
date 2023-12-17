import { getUserData } from "../utils";

export const userSession = (ctx, next) => {
  ctx.user = getUserData();
  next();
};
