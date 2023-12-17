import { clearUserData, getAccessToken } from "../utils.js";

const url = "http://localhost:3030/users/logout";

const token = getAccessToken();

export const logout = async (ctx) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Authorization": token,
    },
  });

  if (response.ok !== true) {
    if (response.status == 403) {
      clearUserData();
      ctx.page.redirect("/");
    }
  }
};
