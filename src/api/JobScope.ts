import api from "./api";

export const apiGetJobScopeList = () => api().get("/job/scope");
