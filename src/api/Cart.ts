import api from "./api";

export const apiGetCartItemList = () => api().get("/cart");

export const apiCreateCartItem = (data: any) => api().post("/cart", data);

export const apiGetCartItemById = (id: string) => api().get(`/cart/${id}`);
