import React from "react";
import Logo from "../../Assets/food2.jpg";
import { Link } from "react-router-dom";
import SearchBar from "./Search";

// const posts = [
//   { id: "1", name: "Vegetables and nuts" },
//   { id: "2", name: "Steaks and maize" },
//   { id: "3", name: "Deserts" },
//   { id: "4", name: "Fresh vegetables" },
//   { id: "5", name: "Fruits and vegetables" },
//   { id: "6", name: "Vegetable salads" },
//   { id: "7", name: "Soups and swallow" },
//   { id: "8", name: "Fruits and vegetables" },
// ];

// const filterPosts = (posts, query) => {
//   if (!query) {
//     return posts;
//   }

//   return posts.filter((post) => {
//     const postName = post.name.toLowerCase();
//     return postName.includes(query);
//   });
// };
const Navbar = () => {
  //   const { search } = window.location;
  //   const query = new URLSearchParams(search).get("s");
  //   const [searchQuery, setSearchQuery] = useState(query || "");
  //   const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <div className="px-10 p-4 bg-Dark sm:hidden">
      <nav className="flex flex-wrap justify-between">
        <div className="w-[70px] h-[60px] rounded-full mt-6">
          <Link to="/">
            <img src={Logo} alt="the logo icon" className="rounded-full" />
          </Link>
        </div>

        <div className="text-Grey mt-8 text-xl font-Inter flex flex-wrap justify-between">
          <Link to="/" className="px-2 hover:underline">
            Home
          </Link>
          <Link to="/" className="px-2 hover:underline">
            About
          </Link>
          <Link to="/Recipes" className="px-2 hover:underline">
            Create recipes
          </Link>
        </div>

        <div className=" flex mt-2 hover:underline">
          <div>
            <SearchBar
            // searchQuery={searchQuery}
            // setSearchQuery={setSearchQuery}
            />
          </div>

          <Link to="/contact">
            <button className="ml-2 w-[100px] mt-6 h-[40px] rounded-lg bg-Wine text-White font-Inter font-base">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
