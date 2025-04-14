import React from "react";

const Home = () => {
  return (
    <div
      className={`rounded-xl border px-[1%] py-[1%] flex justify-center items-center mx-[2%] h-[80vh]  border-amber-50`}
    >
      <div className=" flex justify-center items-center w-full h-full bg-[url('/pexels-ella-olsson-572949-1640777.jpg')] bg-cover bg-center relative rounded-xl">
      <h1 className="text-black text-6xl font-semibold p-5 rounded-xl backdrop-blur-sm bg-white/10 border border-white/30 shadow-md  z-10">
  The Ultimate <span className="text-green-500">Recipe</span>
</h1>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl" />

      </div>
    </div>
  );
};

export default Home;
