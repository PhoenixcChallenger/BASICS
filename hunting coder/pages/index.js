import React from "react";
import Link from "next/link";
import { useEffect ,useState} from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../feactures/counter/counterSlice";

const src =
  "https://f.hubspotusercontent10.net/hubfs/49114/Thoughtful%20young%20programmer%20coding%20on%20computer%20in%20the%20evening%20at%20home.jpeg";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./api/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const users = 1000;
    const timer = setInterval(() => {
      if (count < users) {
        dispatch(increment());
      } else {
        clearInterval(timer);
      }
    }, 10);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className=" mt-8 text-4xl font-bold">Hunting coder</h1>
        <p className="mt-4">A blog for hunting coders by hunting coder</p>
      </div>

      <div className="text-3xl grid grid-cols-2 max-w-[1000px] m-auto mb-10 mt-4">
        <div>{count}+ users</div>
        <div className="text-right">{count}+ followers</div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <Image
          loader={() => src}
          src={src}
          height={667}
          width={1000}
          className="rounded-md shadow-xl"
        ></Image>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Popular Blogs
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {blogs.slice(0, 3).map((post) => {
                return (
                  <article
                    key={post.key}
                    className="flex max-w-xl flex-col items-start justify-between"
                  >
                    <Link href={`../blogpost/${post.slug}`}>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <span className="absolute inset-0" />
                          {post.title}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {post.content.substr(0, 150)}
                        </p>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
