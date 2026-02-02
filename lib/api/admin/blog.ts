import { API } from "../endpoints";
import axios from "../axios"; // import from instance

export const getAllBlogs = async (
  page: number,
  size: number,
  search?: string,
) => {
  try {
    const response = await axios.get(API.ADMIN.BLOGS.GET_ALL, {
      params: {
        page,
        size,
        search,
      },
    });
    return response.data;
  } catch (error: Error | any) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const response = await axios.delete(API.ADMIN.BLOGS.DELETE(id));
    return response.data;
  } catch (error: Error | any) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};
