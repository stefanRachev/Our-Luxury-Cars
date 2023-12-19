import * as request from "../api/request.js";
import * as utils from "../utils.js";

const endPoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export const register = async (email, password) => {
  const result = await request.post(endPoints.register, { email, password });
  utils.setUserData();
  return result;
};

export const login = async (email, password) => {
  const result = await request.post(endPoints.login, { email, password });
  utils.setUserData();
  return result;
};

export const logout = async () => {
  request.get(endPoints.logout);
  utils.clearUserData();
};
