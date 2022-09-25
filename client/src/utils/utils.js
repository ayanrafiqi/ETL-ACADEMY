import { isExpired } from "react-jwt";
export const TOKEN_KEY = "etl_access_token";

export const getToken = () => {
  return localStorage[TOKEN_KEY];
};

export const setToken = (token) => {
  localStorage[TOKEN_KEY] = token;
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const setUserDetails = (data) => {
  setToken(data.token);
  localStorage.userId = data.userId;
  localStorage.email = data.email;
  localStorage.username = data.username;
};

export const logout = () => {
  removeToken();
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
  localStorage.removeItem("username");
};

export const isLoggedIn = () => {
  return !isExpired(getToken());
};
