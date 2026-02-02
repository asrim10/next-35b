import { handleGetAllBlogs } from "@/lib/api/admin/blog-action";
import BlogTable from "./_components/BlogTable";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;
  const page = query.page ? parseInt(query.page as string, 10) : 1;
  const size = query.size ? parseInt(query.size as string, 10) : 10;
  const search = query.search ? (query.search as string) : "";
  console.log("Search params:", { page, size, search });
  // call api
  const response = await handleGetAllBlogs(page, size, search);
  console.log(response);
  if (!response.success) {
    throw new Error(response.message);
  }
  if (!response.blogs || !response.pagination) {
    throw new Error("No blogs found");
  }

  return (
    <div>
      <BlogTable
        blogs={response.blogs}
        pagination={response.pagination}
        search={search}
      ></BlogTable>
    </div>
  );
}
