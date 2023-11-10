import Link from "next/link";
import React, { useEffect, useState } from "react";

const index = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <h1 className="font-bold text-2xl mb-5">Here are latest blogs</h1>
      </div>
      {blogs.map((blogItem) => {
        return (
          <div key={blogItem.key}>
            <Link href={`../blogpost/${blogItem.slug}`}>
              <div className="flex flex-col w-2/5 justify-center items-center text-center m-auto cursor-pointer">
                <h2 className="font-bold mb-1">{blogItem.title}</h2>
                <p className="mb-4">{blogItem.content.substr(0, 150)}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default index;
