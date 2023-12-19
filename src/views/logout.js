import { clearUserData } from "../utils.js";

const url = "http://localhost:3030/users/logout";

export const logout = async (ctx) => {
  
  const token = ctx.user.accessToken;
 
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
  });

  if (!response.ok) {
    if (response.status == 403) {
      clearUserData();
      ctx.page.redirect("/");
    }
  }
};
