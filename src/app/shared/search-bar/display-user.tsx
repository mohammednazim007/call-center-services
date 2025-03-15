import Image from "next/image";
import React from "react";
import { User } from "./type";
import Link from "next/link";

const DisplayUser: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="">
      <div
        key={user.id}
        className="container max-w-3xl px-10 py-3 mx-auto rounded-lg shadow-sm hover:cursor-pointer hover:bg-slate-100 transition-all"
      >
        <span className="text-[#009dff] text-sm">{user.profession}</span>

        <div className="">
          <span className="text-xl font-bold text-slate-600">{user.name}</span>
          <p className="mt-1">{user.description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <Link href={"#"} className="hover:underline text-violet-600">
            Read more
          </Link>
          <div>
            <span className="flex items-center">
              <Image
                width={100}
                height={100}
                loading="lazy"
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
              />
              <span className="hover:underline text-gray-600">{user.name}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
