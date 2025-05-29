import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-gray-900 p-4 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8 shadow-lg">
      <NavLink
        onClick={(e) => console.log(e)}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-white text-indigo-600 shadow-md"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          } transition duration-300 ease-in-out px-5 py-2 rounded-full font-semibold text-base tracking-wide`
        }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        onClick={(e) => console.log(e)}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-white text-indigo-600 shadow-md"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          } transition duration-300 ease-in-out px-5 py-2 rounded-full font-semibold text-base tracking-wide`
        }
        to="/practiceTailwind"
      >
        Practice Tailwind
      </NavLink>
      <NavLink
        onClick={(e) => console.log(e)}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-white text-indigo-600 shadow-md"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          } transition duration-300 ease-in-out px-5 py-2 rounded-full font-semibold text-base tracking-wide`
        }
        to="/settings"
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;

//!-------------

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
//     <nav className="w-full bg-gray-500 p-4 flex flex-col justify-center items-center gap-4 md:flex-row md:gap-5">
//       <NavLink
//         onClick={(e) => console.log(e)}
//         className={({ isActive }) =>
//           `${
//             isActive
//               ? "ring-2 ring-fuchsia-700 text-gray-800"
//               : "text-yellow-400"
//           } font-black bg-green-600 text-lg hover:bg-amber-700 px-4 py-2 rounded text-center`
//         }
//         to="/home"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         onClick={(e) => console.log(e)}
//         className={({ isActive }) =>
//           `${
//             isActive
//               ? "ring-2 ring-fuchsia-700 text-gray-800"
//               : "text-yellow-400"
//           } font-black bg-green-600 text-lg hover:bg-amber-700 px-4 py-2 rounded text-center`
//         }
//         to="/practiceTailwind"
//       >
//         Practice Tailwind
//       </NavLink>
//       <NavLink
//         onClick={(e) => console.log(e)}
//         className={({ isActive }) =>
//           `${
//             isActive
//               ? "ring-2 ring-fuchsia-700 text-gray-800"
//               : "text-yellow-400"
//           } font-black bg-green-600 text-lg hover:bg-amber-700 px-4 py-2 rounded text-center`
//         }
//         to="/settings"
//       >
//         Settings
//       </NavLink>
//     </nav>
//   );
// };

// export default Navbar;

//!------------------------------------
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
//     <nav className="absolute top-0 w-full left-0 bg-gray-500 p-6 flex justify-center items-center gap-20">
//       <NavLink
//         onClick={(e) => console.log(e)}
//         className={(e) =>
//           ` ${
//             e.isActive ? "text-gray-800-400" : "text-yellow-400"
//           } font-black bg-green-600  text-1xl hover:not-focus:bg-amber-700 px-4 py-2 rounded  `
//         }
//         to="/home"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         onClick={(e) => console.log(e)}
//         className={(e) =>
//           ` ${
//             e.isActive ? "text-gray-800-400" : "text-yellow-400"
//           } font-black bg-green-600 text-1xl hover:not-focus:bg-amber-700 px-4 py-2 rounded  `
//         }
//         to="/practiceTailwind"
//       >
//         Practice Tailwind
//       </NavLink>
//       <NavLink
//         onClick={(e) => console.log(e)}
//         className={(e) =>
//           ` ${
//             e.isActive ? "text-gray-800-400" : "text-yellow-400"
//           } font-black bg-green-600 hover:not-focus:bg-amber-700 px-4 py-2 rounded  text-1xl`
//         }
//         to="/settings"
//       >
//         Settings
//       </NavLink>
//     </nav>
//   );
// };

// export default Navbar;
