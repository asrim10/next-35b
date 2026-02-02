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

  return (
    <div>
      page {page}
      <br />
      size {size}
      <br />
      search {search}
    </div>
  );
}
