import { Search } from "lucide-react";
import searchStyles from "./search.module.css";

const SearchInput = () => {
  return (
    <div className=" max-w-[800px] mx-auto p-8 relative overflow-hidden">
      <input
        type="search"
        className={`${searchStyles.searchShadow} w-full border-2 border-[#e1effb] rounded-md shadow-2xl outline-none focus:outline-none focus:ring-1 focus:ring-[#e1effb] text-[20px] p-2 pl-10 pr-5`}
      />
      <div className="absolute top-[2.8rem] left-[2.6rem]">
        <Search className="text-[#009dff]" />
      </div>
    </div>
  );
};

export default SearchInput;
