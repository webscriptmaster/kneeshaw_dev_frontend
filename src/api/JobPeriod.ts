import api from "./api";

export const apiGetJobPeriodList = () => api().get("/job/period");
