import { useRef } from "react";
import "./practiceTailwind.scss";
import { toast } from "react-toastify";

const PracticeTailwind = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const image = imgRef.current;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    image.style.transformOrigin = `${x}% ${y}%`;
    image.style.transform = "scale(2)";
  };

  const handleMouseLeave = () => {
    const image = imgRef.current;
    image.style.transform = "scale(1)";
    image.style.transformOrigin = "center center";
  };

  const AddtoCartHandler = () => {
    toast.success("Added to Cart");
  };

  return (
    <div className=" w-full h-full bg-black text-white">
      <main className="overflow-auto w-full  bg-white text-black p-10 flex flex-wrap gap-10 justify-center items-start">
        {/* 🖼️ Image Container */}
        <div
          ref={containerRef}
          className="w-[400px] h-[400px] overflow-hidden border border-gray-300 rounded-lg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* 🛍️ Product Details */}
        <div className="max-w-md w-full space-y-4">
          <h2 className="text-3xl font-semibold">Minimalist Table Lamp</h2>
          <p className="text-xl text-green-600 font-bold">₹1,499</p>
          <p className="text-sm text-gray-700">
            Add elegance and simplicity to your room with this modern table
            lamp. Designed with matte black finish and warm lighting for a cozy
            feel.
          </p>

          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Color
              </label>
              <select className="w-full mt-1 border border-gray-300 rounded px-3 py-2">
                <option>Black</option>
                <option>White</option>
                <option>Gold</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 mt-1 border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <button
            onClick={AddtoCartHandler}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
        <footer className="w-full bg-black text-white mt-10">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div>
              <h3 className="text-2xl font-bold mb-2">AmanKart</h3>
              <p className="text-sm text-gray-400">
                Premium quality products for your modern lifestyle. Elegance
                meets affordability.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Help</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-3">
                Get the latest updates and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 text-center text-sm text-gray-500 py-4">
            © {new Date().getFullYear()} AmanKart. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PracticeTailwind;

//!---------------------------
// import { useRef } from "react";
// import "./practiceTailwind.scss";

// const PracticeTailwind = () => {
//   const imgRef = useRef(null);
//   const containerRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const container = containerRef.current;
//     const image = imgRef.current;

//     const rect = container.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;

//     image.style.transformOrigin = `${x}% ${y}%`;
//     image.style.transform = "scale(2)";
//   };

//   const handleMouseLeave = () => {
//     const image = imgRef.current;
//     image.style.transform = "scale(1)";
//     image.style.transformOrigin = "center center";
//   };

//   return (
//     <div className=" w-full h-full  relative bg-black text-white">
//       <h1 className=" relative text-center text-2xl pt-5 pb-5 ">
//         PracticeTailwind
//       </h1>
//       <main className="w-full h-screen bg-white relative md:flex-row md:gap-5 overflow-auto  p-10 flex gap-10 flex-wrap">
//         <div
//           ref={containerRef}
//           className="mainDiv-product-image w-[400px] h-[400px] overflow-hidden border border-gray-300 rounded-lg"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             ref={imgRef}
//             src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Product"
//             className="product-image w-full h-full object-cover transition-transform duration-300 ease-in-out"
//           />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PracticeTailwind;
