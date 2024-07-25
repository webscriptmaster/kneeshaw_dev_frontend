export const AUTHORIZATION_PREFIX = "Kneeshaw";

export const getLocalAccessToken = () =>
  localStorage.getItem("ks_access_token") || "";

export const setLocalAccessToken = (newAccessToken: string) =>
  localStorage.setItem("ks_access_token", newAccessToken);

export const removeLocalAccessToken = () =>
  localStorage.removeItem("ks_access_token");

export const getLocalRefreshToken = () =>
  localStorage.getItem("ks_refresh_token") || "";

export const setLocalRefreshToken = (newRefreshToken: string) =>
  localStorage.setItem("ks_refresh_token", newRefreshToken);

export const removeLocalRefreshToken = () =>
  localStorage.removeItem("ks_refresh_token");
