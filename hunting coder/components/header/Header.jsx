import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <nav className="flex max-w-[1200px] m-auto justify-center  mt-5 mb-5">
        <ul className="flex">
          <Link href="/">
            <a><li className="mx-5 font-bold">Home</li></a>
          </Link>
          <Link href="/about">
            <a><li className="mx-5 font-bold">About</li></a>
          </Link>
          <Link href="/blog">
            <a><li className="mx-5 font-bold">Blog</li></a>
          </Link>
          <Link href="/contact">
            <a><li className="mx-5 font-bold">Contact</li></a>
          </Link>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
