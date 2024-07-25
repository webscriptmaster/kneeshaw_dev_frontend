import api from "./api";

// Join Community
export const apiCommunityJoin = (data: any) =>
  api().post("/community/join", data);
