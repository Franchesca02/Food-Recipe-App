// // import { unstable_Hi} from "react-router-dom";
// import React from "react";
// import Search from "../../Assets/search.png";

// const SearchBar = ({ searchQuery, setSearchQuery }) => {
//   //   const history = unstable_HistoryRouter();
//   const onSubmit = (e) => {
//     // history.push(`?s=${searchQuery}`);
//     e.preventDefault();
//   };

//   return (
//     <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
//       <label htmlFor="header-search">
//         <span className="visually-hidden">Search blog posts</span>
//       </label>
//       <div className="bg-White flex border-2 w-[220px] h-[35px] rounded-lg px-2 py-2 ">
//         <input
//           value={searchQuery}
//           onInput={(e) => setSearchQuery(e.target.value)}
//           type="text"
//           id="header-search"
//           placeholder="Search recipes"
//           name="s"
//           className="border-none outline-0"
//         />
//         <img src={Search} alt="search icon" />
//       </div>
//       {/* <button
//         type="submit"
//         className="bg-Wine text-White rounded-lg w-[40px] h-[20px]"
//       >
//         Search
//       </button> */}
//     </form>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
// import List from "./List";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState(["Nutritious meals", "Fries", "Deserts"]);

  // userinput is controlled by the App component
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const addItem = (e) => {
    if (userInput !== "") {
      setList([...list, userInput]);
      setUserInput("");
    }
  };

  const removeItem = (item) => {
    const updatedList = list.filter((listItem) => listItem !== item);
    setList(updatedList);
  };

  return (
    <div>
      <li list={list} removeItem={removeItem} />
      {/* <hr /> */}
      <form>
        <input
          placeholder="Search..."
          value={userInput}
          onChange={handleChange}
          className="w-[150px] h-[30px] rounded-lg"
        />
        <button
          type="button"
          onClick={addItem}
          className="w-[80px] h-[30px] rounded-lg bg-Grey text-White"
        >
          {"Search"}
        </button>
      </form>
    </div>
  );
};

export default Search;
