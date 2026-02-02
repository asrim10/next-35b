"use server";

import { getAllBlogs, deleteBlog } from "@/lib/api/admin/blog";
import { revalidatePath } from "next/cache";

export const handleGetAllBlogs = async (
  page: number,
  size: number,
  search?: string,
) => {
  try {
    const response = await getAllBlogs(page, size, search);
    if (response.success) {
      return {
        success: true,
        message: response.message,
        blogs: response.data,
        pagination: response.pagination,
      };
    }
    return {
      success: false,
      message: response.message,
    };
  } catch (error: Error | any) {
    return {
      success: false,
      message: error.message || "Failed to fetch blogs",
    };
  }
};

export const handleDeleteBlog = async (id: string) => {
  try {
    const response = await deleteBlog(id);
    if (response.success) {
      revalidatePath("/admin/blogs");
      return {
        success: true,
        message: response.message,
      };
    }
    return {
      success: false,
      message: response.message,
    };
  } catch (error: Error | any) {
    return {
      success: false,
      message: error.message || "Failed to delete blog",
    };
  }
};
