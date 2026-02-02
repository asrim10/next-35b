"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function BlogTable({
  blogs,
  pagination,
  search,
}: {
  blogs: any[];
  pagination: any;
  search: string;
}) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(search);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/admin/blogs?search=${searchTerm}`);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search blogs..."
      />
      <button onClick={handleSearch}>Search</button>
      <table className="table border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog._id}</td>
              <td>{blog.title}</td>
              <td>
                <Link href={`/admin/blogs/${blog._id}`}>View</Link> |{" "}
                <Link href={`/admin/blogs/${blog._id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {pagination && (
          <>
            {pagination.page > 1 && (
              <Link
                href={`/admin/blogs?page=${pagination.page - 1}&size=${pagination.size}&search=${search}`}
              >
                Previous
              </Link>
            )}
            <span>
              {" "}
              Page {pagination.page} of {pagination.totalPages}{" "}
            </span>
            {pagination.page < pagination.totalPages && (
              <Link
                href={`/admin/blogs?page=${pagination.page + 1}&size=${pagination.size}&search=${search}`}
              >
                Next
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}
