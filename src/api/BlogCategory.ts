import api from "./api";

export const apiGetBlogCategoryList = () => api().get("/blog/category");
