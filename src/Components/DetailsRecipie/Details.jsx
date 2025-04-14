import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const Details = () => {
  const { meals } = useLoaderData();

  const navi=useNavigate()

  return (
    <div className="px-[2%]  flex flex-col items-center gap-10">
      <div className={`${meals.length<2?'grid grid-cols-1':'grid md:grid-cols-2 lg:grid-cols-3 gap-5'}`}>
        {meals.map((meal, idx) => {
 
          return (
            <div
              className="flex flex-col items-center  text-center border border-gray-300  p-3 rounded-2xl"
              key={idx}
            >
              <h1 className="text-xl font-bold  mb-4">{meal.strMeal}</h1>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="h-96 w-80 rounded-xl shadow-md object-cover"
              />
            </div>
          );
        })}
      </div>
      <button onClick={()=>navi(-1)} className="btn">Go Back</button>
      
    </div>
  );
};

export default Details;
