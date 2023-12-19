import * as request from "../api/request.js";
import * as utils from "../utils.js";

const endPoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export const registerUser = async (email, password) => {
  const result = await request.post(endPoints.register, { email, password });
  utils.setUserData(result);
  return result;
};

export const loginUser = async (email, password) => {
  const result = await request.post(endPoints.login, { email, password });
  utils.setUserData(result);
  return result;
};

export const logoutUser = async () => {
  request.get(endPoints.logout);
  utils.clearUserData();
};
