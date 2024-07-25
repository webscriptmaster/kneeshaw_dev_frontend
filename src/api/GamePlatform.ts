import api from "./api";

export const apiGetGamePlatformList = () => api().get("/game/platform");
