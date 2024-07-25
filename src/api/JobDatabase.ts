import api from "./api";

export const apiGetJobDatabaseList = () => api().get("/job/database");
