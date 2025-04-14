import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const Category = () => {

    const {categories}=useLoaderData()
  
   
    const navigate=useNavigate()

  return (


    <div className='px-[2%] grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
      

      {

          categories.map((category)=>{

           return <div className='flex flex-col  gap-5 items-center  p-5 rounded-2xl backdrop-blur-md bg-white/10 border border-white/30 shadow-md  z-10 justify-between' key={category.idCategory}> 

                <h2 className='text-2xl font-semibold'>{category.strCategory}</h2>
                
                <div className='p-4 w-full h-1/3'>
                <img className=' object-cover' src={category.strCategoryThumb} alt="" />
                </div>
                
                <p className='flex-1'>{category.strCategoryDescription}</p>
                <button onClick={() => navigate(`/recipeCategory/${category.strCategory}`)} className='btn'>See More</button>



            </div>



          } )







      }





    </div>
  );
};

export default Category;