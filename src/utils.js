export const setUserData = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const getUserData = () => JSON.parse(localStorage.getItem("user"));

export const getAccessToken = () => {
  const user = getUserData();
  if (user) {
    return user.accessToken;
  } else {
    return null;
  }
};

export const clearUserData = () => localStorage.removeItem("user");
