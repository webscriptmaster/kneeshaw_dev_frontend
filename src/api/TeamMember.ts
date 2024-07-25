import api from "./api";

export const apiGetTeamMemberList = () => api().get("/team/member");
