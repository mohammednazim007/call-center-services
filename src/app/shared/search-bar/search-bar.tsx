"use client";
import { useState } from "react";
import DisplayUser from "./display-user";
import SearchInput from "./search-input";
import { User } from "./type";

const SearchBar = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchTerm: string) => {
    try {
      const response = await fetch("/fake_user.json"); // Ensure the correct path
      if (!response?.ok) throw new Error("Failed to fetch data");

      const data: User[] = await response?.json();

      if (!Array?.isArray(data)) throw new Error("Invalid data format");

      if (searchTerm?.trim()?.length > 0) {
        const filterData = data?.filter((user) =>
          user?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        );

        setUserData(filterData);
      } else {
        setUserData([]); // Reset to full data when search is empty
      }

      setError(null); // Reset error state if successful
    } catch (err) {
      setError((err as Error)?.message);
      setUserData([]); // Clear data if there's an error
    }
  };

  return (
    <div>
      <SearchInput handleSearch={handleSearch} />

      {error && <p className="text-red-500">{error}</p>}

      {userData?.length > 0 ? (
        userData?.map((user) => <DisplayUser key={user?.id} user={user} />)
      ) : (
        <span className="text-gray-500 text-center w-full block text-xl">
          No users found
        </span>
      )}
    </div>
  );
};

export default SearchBar;
