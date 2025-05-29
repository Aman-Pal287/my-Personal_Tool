import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div className=" main-div min-h-screen bg-gradient-to-br from-black to-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Title */}
      <h1 className="bhosri text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">
        Welcome to <span className="text-indigo-500">Aman's ToolBox</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-8">
        Your personal tool application built with React to boost your
        productivity and manage tasks efficiently.
      </p>

      {/* CTA Button */}
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
        Get Started
      </button>

      {/* Hero Image */}
      <div className="mt-12">
        {/* ! Replace src with your hero/illustration image URL */}
        <img
          src="https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tool App Illustration"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </div>

      {/* Feature Section - Optional for later */}
      {/* <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <p className="text-gray-400">Add your custom tools info here...</p>
      </section> */}
    </div>
  );
};

export default Home;

//!---------------------------------------------
// const Home = () => {
//   return (
//     <div>
//       <h1 className="text-white">Home</h1>
//     </div>
//   );
// };

// export default Home;
