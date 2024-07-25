import api from "./api";

// Login
export const apiLogin = (data: any) => api().post("/auth/login", data);

// Logout
export const apiLogout = () => api().post("/auth/logout");

// Register
export const apiRegister = (data: any) => api().post("/auth/register", data);

export const apiVerifyRegisterToken = (data: any) =>
  api().post("/auth/verify-register-token", data);

// Forgot by email
export const apiSendResetLink = (data: any) =>
  api().post("/auth/send-reset-link", data);

export const apiVerifyResetToken = (data: any) =>
  api().post("/auth/verify-reset-token", data);

export const apiResetPasswordByToken = (data: any) =>
  api().post("/auth/reset-password-by-token", data);

export const apiSendResetCode = (data: any) =>
  api().post("/auth/send-reset-code", data);

export const apiVerifyResetCode = (data: any) =>
  api().post("/auth/verify-reset-code", data);

export const apiUpdateProfile = (data: any) =>
  api().putForm("/auth/update-profile", data);

export const apiChangeEmail = (data: any) =>
  api().put("/auth/change-email", data);

export const apiChangePassword = (data: any) =>
  api().put("/auth/change-password", data);

export const apiSendDataRequest = () => api().post("/auth/send-data-request");
