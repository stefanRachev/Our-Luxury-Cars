import { clearUserData,getAccessToken } from "../utils.js";



export const logout = async (ctx) => {

  const url = "http://localhost:3030/users/logout";

  const token = getAccessToken();
 
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
