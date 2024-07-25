import api from "./api";

export const apiGetServiceList = () => api().get("/service");
