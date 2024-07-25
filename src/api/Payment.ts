import api from "./api";

export const apiPaymentCheckout = () => api().post("/payment/checkout");
