import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecipeList = ({ recipes, type }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 overflow-y-auto bg-gradient-to-r from-cyan-500 to-blue-500">
      {recipes?.map((recipe, idx) => {
        return (
          <div
            className="shadow-lg rounded-lg bg-slate-300 overflow-hidden border-2 border-lime-800"
            key={idx}
          >
            <Image
              alt="Recipe"
              width={500}
              height={500}
              src={recipe.strMealThumb}
              className="w-full border-b-4 border-lime-800"
            />
            <div className="p-5">
              <h2 className="font-bold text-2xl">{recipe.strMeal}</h2>
              <div className="flex justify-between">
                <Link href={`/types/${type}/${recipe.idMeal}`}>
                  <button className="text-white bg-blue-500 rounded py-1 px-3 mt-5 hover:bg-blue-600 border border-black">
                    Get Recipe Details
                  </button>
                </Link>                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;