import api from "./api";

export const apiGetJobList = () => api().get("/job/list");

export const apiCreateJob = (data: any) => api().post("/job/list", data);
