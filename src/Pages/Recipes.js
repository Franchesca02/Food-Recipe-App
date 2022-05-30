import React from "react";

const Recipes = () => {
  const handleSubmit = (values) => {
    console.log("values", values);
    alert("Thanks for sharing your recipe with us!");
  };
  return (
    <div className="px-6">
      <h2 className="font-Inter text-2xl text-Yellow font-bold py-4">
        Welcome!
      </h2>
      <p className="font-Inter font-medium text-base w-[350px] py-2 text-Wine">
        Please, be expressive enough with your description as we have noticed
        that elaborate explanations for recipes can increased your visibilty and
        customer base.
      </p>
      <form onSubmit={handleSubmit} className="grid py-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-[330px] h-[50px] bg-Gray font-medium font-Inter rounded-lg border-2 border-Grey mt-2 outline-0 px-4 py-2"
        />
        <input
          type="file"
          placeholder="recipe image"
          required
          className="w-[330px] h-[50px] rounded-lg border-2 border-Grey mt-2 outline-0 px-4 py-2"
        />
        <textarea
          required
          className="w-[455px] h-[150px] font-medium text-Grey font-Inter rounded-lg border-2 border-Grey outline-0 mt-2 px-2 py-6"
        >
          Enter recipe procedures
        </textarea>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-[180px] h-[50px] rounded-2xl bg-Wine text-Grey font-Inter font-medium mt-12 ml-2"
          >
            Submit recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Recipes;
