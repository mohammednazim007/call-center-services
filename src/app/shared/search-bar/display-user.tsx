import Image from "next/image";
import React from "react";
import { User } from "./type";
import Link from "next/link";

const DisplayUser: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="">
      <div
        key={user.id}
        className="container max-w-3xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/category/javascript" // Example route for category
            className=""
          >
            {user.profession}
          </Link>
        </div>
        <div className="mt-3">
          <Link
            href={`/user/${user.id}`} // Dynamic route for user details
            className="text-2xl font-bold hover:underline"
          >
            {user.name}
          </Link>
          <p className="mt-2">{user.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link
            href={`/user/${user.id}`} // Dynamic route for user details
            className="hover:underline text-violet-600"
          >
            Read more
          </Link>
          <div>
            <Link
              href={`/user/${user.id}`} // Dynamic route for user details
              className="flex items-center"
            >
              <Image
                width={100}
                height={100}
                loading="lazy"
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
              />
              <span className="hover:underline text-gray-600">{user.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
