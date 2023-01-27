import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Schema from "../Components/InputSchema/Schema";
import { nanoid } from "nanoid";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setFlashCard } from "../DataFromLocalStorage/ParentState";
import { toast } from 'react-toastify'
import "../App.css";

const CreateFlashCard = ({ theme }) => {
  const dispatch = useDispatch();
  const filePicker = useRef(null);
  const filePickerForCard = useRef(null);
  const inputRef = useRef([]);
  inputRef.current = [];
  const [groupImg, setGroupImg] = useState("");
  const [cardImg, setCardImg] = useState([]);

  const addRef = (item) => {
    if (item && !inputRef.current.includes(item)) {
      inputRef.current.push(item)
    }
  }

  const addFlashCard = (values, actions) => {
    dispatch(setFlashCard(values));
    actions.resetForm();
    setGroupImg("");
    setCardImg("");
    toast.success("Flashcard created successfully")
  };

  const handleImage = (index) => {
    const values = Object.values(cardImg)
    const filter = values.splice(index, 1)
    if (index > 0) setCardImg(values)
  }
  return (
    //default value of the form input, will after being change as per user input
    <Formik
      initialValues={{
        groupid: nanoid(),
        groupname: "",
        groupdescription: "",
        groupimg: null,
        cards: [
          {
            cardid: nanoid(),
            cardname: "",
            carddescription: "",
            cardimg: "",
          },
        ],
        createOn: new Date(Date.now()).toLocaleString(),
      }}
      validationSchema={Schema}
      onSubmit={addFlashCard}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form
          className={`w-full space-y-5 text-${theme === "dark" ? "white" : "slate-600"
            } font-medium `}
        >
          {/* GROUP CREATION PART */}
          <div
            className={`flex flex-col px-10 py-4 bg-${theme === "dark" ? "dark" : "white"
              } shadow-sm shadow-white space-y-4 rounded-md border-2 `}
          >
            {/* LEFT */}
            <div className="flex flex-col sm:flex-row  lg:space-x-10 pt-3">
              <div className="flex flex-col relative">
                <h2>
                  Create Group
                  <sup className="font-medium text-xl text-red-700 ">*</sup>
                </h2>
                {/*FEATURE TO SHOW THE SELECTED GROUP IMAGE */}
                {values.groupimg ? (
                  <div className="flex items-center space-x-3  my-5">
                    <div className="w-full min-w-[100px] min-h-[100px] bg-gray-200 max-w-[100px] max-h-[100px]  overflow-hidden  flex rounded-full shadow-md hover:ring-2 hover:-translate-y-1 transition-all ease-in-out duration-300 hover:ring-slate-500 hover:shadow-2xl">
                      <img
                        className="object-cover"
                        src={values.groupimg}
                        alt=""
                      />
                    </div>
                    {/* ICON TO DELETE THE SELECTED IMAGE */}
                    <label
                      onClick={() => {
                        setFieldValue(`groupimg`, "");
                        setGroupImg("");
                      }}
                    >
                      <FaTrash color="#7F8487" size={"1.5rem"} />
                    </label>
                  </div>
                ) : (
                  ""
                )}
                <Field
                  type="text"
                  name="groupname"
                  className={`border-slate-400 h-11 rounded-md p-2 lg:w-72 md:w-72   bg-gray-50 border  text-gray-900 text-sm `}
                />
                <ErrorMessage
                  component={"div"}
                  className=" text-sm text-red-600"
                  name="groupname"
                />
              </div>{/*BUTTON TO UPLOAD IMAGE FOR GROUP */}
              {groupImg ? (
                ""
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    filePicker.current.click();
                  }}
                  className={`px-5 py-2 mt-6 item-center md:ml-1.5 sm:ml-1.5 bg-white border-2 border-slate-300 active:border-blue-600 text-blue-700 font-semibold rounded-md space-x-2 `}
                >
                  <UploadOutlined /> <span>Upload Image</span>
                  <input
                    type="file"
                    ref={filePicker}
                    value={groupImg}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.readAsDataURL(file);

                      reader.onload = () => {
                        setFieldValue("groupimg", reader.result);
                        setGroupImg(reader.result);
                      };
                    }}
                    hidden
                  />
                </button>
              )}
            </div>

            {/* GROUP DESCRIPTION*/}
            <div className="flex flex-col w-full sm:w-[70%]">
              <h2 className="mb-2">Add Description</h2>
              <Field
                as="textarea"
                name="groupdescription"
                rows={3}
                placeholder="Describe the roles, responsibilities, skills required for the job and help candidate understand the role better"
                className="resize-none  border-slate-400 h-16 rounsded-md focus:h-24 p-2 lg:w-auto md:w-72 transition-all ease-in-out bg-gray-50 border duration-500  text-gray-900 text-sm "
              />
              <ErrorMessage
                component={"div"}
                className="text-sm text-red-500"
                name="groupdescription"
              />
            </div>
          </div>

          {/* CARDS SECTION  */}
          <div className={`text-black drop-shadow-lg rounded-lg bg-${theme === "dark" ? 'dark' : 'white'} border-2 p-5 rounded-md mt-4  overflow-hidden`} >
            {/* FieldArray component from Formik which will create Dynamic Form for the custom input */}

            <FieldArray name="cards">
              {(arrayHelper) => {
                const cards = values.cards;
                return (
                  <>
                    {cards && cards.length > 0
                      ? cards.map((card, index) => (
                        <div
                          className={`flex items-center space-x-10 border-2  px-5 lg:px-10 py-1 md:flex md:space-x-10 md:items-center relative flex-nowrap mb-2`}
                          key={index}
                        >
                          <div className=" rounded-full text-white p-2 w-9 h-9 flex items-center justify-center bg-red-600 text-white text-md font-semibold">
                            {index + 1}
                          </div>

                          <div className="flex  flex-col md:space-x-9 md:flex-row ">
                            <div className={`text-${theme === "dark" ? "white" : "black"} relative flex flex-col space-y-3 align-middle justify-center`}>
                              <h2>
                                Enter Term{" "}
                                <sup className="font-medium text-xl text-red-700">
                                  *
                                </sup>
                              </h2>
                              {/* INPUT FIELD TO CARDS TERM */}
                              <Field
                                type="text"
                                name={`cards.${index}.cardname`}
                                innerRef={addRef}
                                autoFocus
                                className="border-slate-400 h-11 rounded-md p-2 lg:w-72 md:w-72 sm:w-64   w-44   bg-gray-50 border  text-gray-900 text-xl"
                              />{" "}
                              <ErrorMessage
                                component={"div"}
                                className="text-sm text-red-500"
                                name={`cards.${index}.cardname`}
                              />
                            </div>
                            <div className={`text-${theme === "dark" ? "white" : "black"} relative flex flex-col justify-center space-y-4 align-middle`}>
                              <h2>
                                Enter Definition
                                <sup className="font-medium text-xl text-red-700">
                                  *
                                </sup>
                              </h2>
                              {/*INPUT FIELD TO CARD DESCRIPTION */}
                              <Field
                                as="textarea"
                                name={`cards.${index}.carddescription`}
                                className="resize-none  border-slate-400 h-11 rounded-md focus:h-24 p-2 lg:w-72 md:w-72 sm:w-64 w-44 transition-all ease-in-out bg-gray-50 border duration-500  text-gray-900 text-sm "
                              />{" "}
                              <ErrorMessage
                                component={"div"}
                                className="text-sm text-red-500"
                                name={`cards.${index}.carddescription`}
                              />
                            </div>

                            <div className="flex items-center space-x-2  mt-8">
                              {/* BUTTON TO SELECT THE IMAGE FOR CARDS */}

                              {cardImg && cardImg[index] ? (
                                <div className="md:flex  space-x-4 space-y-4 my-6 ">
                                  <div className="w-full relative min-w-[150px] min-h-[150px]  max-w-[200px] max-h-[150px] p-2   flex hover:border-slate-400 ">

                                    <label className="mt-5">
                                      <img
                                        src={values.cards[index].cardimg}
                                        alt=""
                                        className="w-28 h-28 object-contain"
                                      />
                                    </label>
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                              {cardImg && cardImg[index] ? (
                                ''
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => {
                                    filePickerForCard?.current?.click();
                                  }}
                                  name={`cards[${index}].cardimg`}
                                  className={` px-1 py-1  bg-white border-2 border-blue-600 active:border-slate-300 text-blue-700 font-semibold rounded-md space-x-2 w-auto sm:w-72  `}
                                >
                                  <PlusOutlined />
                                  <span>Select Image</span>
                                  <input
                                    type="file"
                                    name={`cards[${index}].cardimg`}
                                    ref={filePickerForCard}
                                    value={cardImg[index]}
                                    onChange={(e) => {
                                      const file1 = e.target.files[0];
                                      const readerForCardImg = new FileReader();
                                      readerForCardImg.readAsDataURL(file1);
                                      readerForCardImg.onload = () => {
                                        setFieldValue(`cards.${index}.cardimg`,
                                          readerForCardImg.result
                                        )
                                        setCardImg((prev) => ({
                                          ...prev,
                                          [index]: readerForCardImg.result,
                                        }))
                                      };
                                    }}
                                    hidden
                                  />
                                </button>
                              )}
                              <div className="flex  justify-around w-full md:flex-col md:space-y-5 md:mt-5">
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (index > 0) arrayHelper.remove(index);
                                    handleImage(index)
                                  }
                                  }
                                >
                                  <TrashIcon className="h-6 text-slate-500" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => { inputRef.current[index].focus() }}
                                >
                                  <PencilAltIcon className="h-6 text-blue-600" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                      : null}
                    {/* BUTTON TO CREATE SAME GROUP OF INPUTS */}
                    <button
                      type="button"
                      onClick={() =>
                        //  This button will add the new group of inputs to the dynamic form
                        arrayHelper.push({
                          cardid: nanoid(),
                          cardname: "",
                          carddescription: "",
                          cardimg: null,
                        })
                      }
                      className={`flex items-center space-x-2 text-blue-600 font-medium text-sm bg-${theme === "dark" ? "dark" : "white"} mb-5 px-5 py-2 w-30`}
                    >
                      <PlusOutlined />
                      <span>Add More</span>
                    </button>
                    <div className="flex justify-center w-full">
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="py-2 px-6  bg-red-600 text-white rounded-md "
                        style={{ marginBottom: "79px" }}
                      >
                        Create
                      </button>
                    </div>
                  </>
                );
              }}
            </FieldArray>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateFlashCard;
