import api from "./api";

export const apiGetCookieConsent = () => api().get("/cookie/consent");
