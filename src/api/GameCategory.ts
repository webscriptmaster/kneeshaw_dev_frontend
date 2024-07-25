import api from "./api";

export const apiGetGameCategoryList = () => api().get("/game/category");
