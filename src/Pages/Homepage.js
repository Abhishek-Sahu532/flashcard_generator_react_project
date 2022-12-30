import React from 'react'
import { NavLink } from 'react-router-dom'

<<<<<<< HEAD

=======
>>>>>>> 4127cf4ce401f16cf944712026d07a3e4b5370dd
const Homepage = () => {
  return (
    <>
      <div className="w-full pt-2">
<<<<<<< HEAD
        <h1 className=" text-xl text-black font-semibold mb-5 create">
=======
        <h1 className=" text-xl text-black font-semibold mb-5">
>>>>>>> 4127cf4ce401f16cf944712026d07a3e4b5370dd
          Create Flashcard
        </h1>
        <div className="flex items-center space-x-10 mb-3">
          <button className="text-sm font-semibold text-red-600">
            <NavLink
              to={"/"}
              style={({ isActive }) => ({
                borderBottom: isActive ? " 4px solid red" : undefined,
                paddingBottom: "12px",
                borderRadius: "3px",
              })}
            >
              Create New
            </NavLink>
          </button>

<<<<<<< HEAD
          <button className=" btn text-sm font-semibold text-red-600">
=======
          <button className="text-sm font-semibold text-red-600">
>>>>>>> 4127cf4ce401f16cf944712026d07a3e4b5370dd
            {" "}
            <NavLink
              to={"/myflashcard"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "4px solid red" : undefined,
                paddingBottom: "12px",
                borderRadius: "3px",
              })}
            >
              My Flashcard
            </NavLink>{" "}
          </button>
<<<<<<< HEAD
          
=======
>>>>>>> 4127cf4ce401f16cf944712026d07a3e4b5370dd
        </div>
        <hr className=' border bg-slate-300 border-slate-300 mb-8' />
      </div>
    </>
  );
}

export default Homepage