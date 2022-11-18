import React from "react";
import { useFormik } from "formik";
function CreateGroup() {
  const formikCreateGroup = useFormik({
    initialValues: {
      createGroup: "",
      imageFile: "",
      groupDescription: "",
    },
    validate :values=>{
      let error ={};
      if(!values.createGroup){
        error.createGroup ='Required'
      }
      return error

    }
  });

  console.log(formikCreateGroup.values);

  return (
    <div className="p-5 bg-slate-300 mt-1 mx-10 my-10">
      <form className="form-control">
        <label
          className="relative block decoration-gray-300 text-lg font-normal text-slate-700"
          htmlFor="createGroup"
        >
          {" "}
          Create Group
          <span className="after:content-['*'] form-label inline-block mb-2 "></span>
        </label>
        <div className="flex items-center space-x-6">
          {/* INPUT FIELD FOR CREATE FROUP */}

          <input
            type="text"
            name="createGroup"
            id="createGroup"
            className="w-64 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"
            onChange={formikCreateGroup.handleChange}
            value={formikCreateGroup.values.createGroup}
            onBlur={formikCreateGroup.handleBlur}
          />
          {formikCreateGroup.touched.createGroup &&
          formikCreateGroup.errors.createGroup ? (
            <div className="erros">{formikCreateGroup.errors.createGroup}</div>
          ) : null}
          {/* BUTTON TO CHOOSE GROUP AVATAR */}
          <label htmlFor="imageFile"></label>

          <input
            type="file"
            name="imageFile"
            id="imageFile"
            className="w-30 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-violet-700 hover:file:bg-violet-100 text sm text-slate-300"
            onChange={formikCreateGroup.handleChange}
            value={formikCreateGroup.values.imageFile}
          />

          {/* GROUP DESCRIPTION */}
        </div>
        <label
          htmlFor="groupDescription"
          className="block mb-2 mt-1 text-lg font-normal text-slate-700"
        >
          Add description
        </label>
        <textarea
          id="groupDescription"
          name="groupDescription"
          rows="4"
          className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1 resize-none"
          placeholder="Describe the roles, responsibility, skills required for the job and help candidate understand the role better."
          onChange={formikCreateGroup.handleChange}
          value={formikCreateGroup.values.groupDescription}
        ></textarea>
      </form>
    </div>
  );
}

export default CreateGroup;
