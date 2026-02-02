// list of backend routes

export const API = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    WHOAMI: "/api/auth/whoami",
    UPDATEPROFILE: "/api/auth/update-profile",
  },
  ADMIN: {
    BLOGS: {
      GET_ALL: "/api/admin/blogs",
      GET_ONE: (id: string) => `/api/admin/blogs/${id}`,
      CREATE: "/api/admin/blogs",
      UPDATE: (id: string) => `/api/admin/blogs/${id}`,
      DELETE: (id: string) => `/api/admin/blogs/${id}`,
    },
  },
};
