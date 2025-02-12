import DisplayUser from "./display-user";
import SearchInput from "./search-input";

const SearchBar = () => {
  const userData = {
    email: "willow.bailey@example.com",
    name: "Willow Bailey",
    avatar: "https://randomuser.me/api/portraits/women/64.jpg",
    profession: "Psychologist",
    id: "50",
    description:
      "Studies human behavior and mental processes, providing therapy and counseling to improve mental health.",
    address: {
      city: "Memphis",
      location: "35.1495, -90.0490",
    },
  };

  return (
    <div>
      <SearchInput />

      <DisplayUser user={userData} />
    </div>
  );
};

export default SearchBar;
