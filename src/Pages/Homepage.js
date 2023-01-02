import React from 'react'
import { NavLink } from 'react-router-dom'

const Homepage = ({mode,toggleMode}) => {
  return (
    <>
      <div className={`w-full pt-2 bg-${mode}`}  >
        <h1 className=" text-xl text-black font-semibold mb-5">
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

          <button className="text-sm font-semibold text-red-600">
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
        </div>
        <hr className=' border bg-slate-300 border-slate-300 mb-8' />
      </div>
    </>
  );
}

export default Homepage