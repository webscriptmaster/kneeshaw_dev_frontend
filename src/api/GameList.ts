import api from "./api";

export const apiGetGameById = (id: string) => api().get(`/game/list/${id}`);

export const apiGetGameList = () => api().get("/game/list");
