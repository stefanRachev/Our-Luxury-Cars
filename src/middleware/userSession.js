import { getUserData } from "../utils.js";

export const userSession = (ctx, next) => {
  ctx.user = getUserData();
  next();
};
