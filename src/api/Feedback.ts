import api from "./api";

export const apiCreateFeedback = (data: any) => api().post("/feedback", data);
