import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Top navbar */}
      <div className="bg-white px-4 py-3 shadow-md flex justify-between items-center">
        <p className=" text-secondary font-semibold">+91 8001074096</p>
        <div className="flex justify-center items-center gap-3 rounded-md">
          <button>F</button>
          <button>I</button>
          <button>L</button>
          <button>T</button>
          <button>W</button>
          <button>E</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
