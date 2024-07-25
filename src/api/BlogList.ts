import api from "./api";

export const apiGetBlogById = (id: string) => api().get(`/blog/list/${id}`);

export const apiGetBlogList = () => api().get("/blog/list");
