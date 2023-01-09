import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Schema from "../Components/InputSchema/Schema";
import { nanoid } from "nanoid";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { setFlashCard } from "../DataFromLocalStorage/ParentState";
import '../App.css';




const CreateFlashCard = ({theme}) => {
  const dispatch = useDispatch();
  const filePicker = useRef(null);
  const filePickerForCard = useRef(null);
  const editRef = useRef(null);
  const [groupImg, setGroupImg] = useState("");
  const [cardImg, setCardImg] = useState({});

  const addFlashCard = (values, actions) => {
    dispatch(setFlashCard(values));
    actions.resetForm();
    setGroupImg("");
    setCardImg('')
  };

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
            cardimg: null,
          },
        ],
        createOn: new Date(Date.now()).toLocaleString(),
      }}
      validationSchema={Schema}
      onSubmit={addFlashCard}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form className={`w-full space-y-5 text-${theme==='dark'?'white':'slate-600'} font-medium `} >
          {/* upper */}
          <div className={`flex flex-col px-10 py-4 bg-${theme==='dark'?'dark':'white'} shadow-sm shadow-white space-y-4 rounded-md border-2 `}>
            {/* LEFT */}
            <div className="flex flex-col sm:flex-row items-center space-x-10 pt-3">
              <div className="flex flex-col relative">
                <h2>Create Group<sup className="font-medium text-xl text-red-700 ">*</sup></h2>
                
                <Field
                  type="text"
                  name="groupname"
                  className={`border-slate-400 md:w-96 border-2 rounded-sm focus:fing-slate-400 focus:border focus:border-slate-400 `}
                />
                {/* <span className="absolute left-[7rem] text-lg font-medium">
                  *
                </span> */}
                <ErrorMessage
                  component={"div"}
                  className=" text-sm text-red-600"
                  name="groupname"
                />
              </div>
              {/* right */}

              {groupImg ? (
                <img
                  src={groupImg}
                  alt="groupImg"
                  className="w-28 h-28 object-contain"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    filePicker.current.click();
                  }}
                  className={`flex items-center px-5 py-2 mt-6 bg-white border-2 border-slate-300 active:border-blue-600 text-blue-700 font-semibold rounded-md space-x-2`}
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

            {/* down */}
            <div className="flex flex-col w-full sm:w-[70%]">
              <h2 className="mb-2">Add Description</h2>
              <Field
                as="textarea"
                name="groupdescription"
                rows={3}
                placeholder="Describe the roles, responsibilities, skills required for the job and help candidate understand the role better"
                className="resize-none border-slate-300 border-2 rounded-sm placeholder:opacity-40 focus:ring-slate-400 focus:border focus:border-slate-400"
              />
              <ErrorMessage
                component={"div"}
                className="text-sm text-red-500"
                name="groupdescription"
              />
            </div>
          </div>

          {/* Add Cards Section  */}
          <div className="text-black drop-shadow-lg rounded-lg bg-white p-5 rounded-md mt-4  overflow-hidden ">
            {/* FieldArray component from Formik which will create Dynamic Form for the custom input */}

            <FieldArray name="cards">
              {(arrayHelper) => {
                const cards = values.cards;
                return (
                  <>
                    {cards && cards.length > 0
                      ? cards.map((card, index) => (
                          <div
                            className={`flex items-center space-x-10 border-2 bg-${theme==='dark'?'dark':'white'} px-5 lg:px-10 py-4 text-${theme==='dark'?'white':'slate-600'} md:flex md:space-x-10 md:items-center relative flex-wrap`}
                            key={index}
                          >
                            <div className="px-2 rounded-full text-white p-2 w-9 h-9 flex items-center justify-center bg-red-600 text-white text-md font-semibold rounded-full">
                              {index + 1}
                            </div>

                            <div className='flex  flex-col md:space-x-9 md:flex-row '>
                              <div className="relative flex flex-col  space-y-3 align-middle justify-center">
                                <h2>Enter Term <sup className="font-medium text-xl text-red-700">*</sup></h2>
                                <Field
                                  type="text"
                                  name={`cards.${index}.cardname`}
                                  innerRef={editRef}
                                  className="border-slate-400 md:w-64 border-2 rounded-sm focus:fing-slate-400 focus:border focus:border-slate-400 h-12 rounded-md p-2 lg:w-72 bg-gray-50 border  text-gray-900 text-sm "
                                />{" "}
                              
                                <ErrorMessage
                                  component={"div"}
                                  className="text-sm text-red-500"
                                  name={`cards.${index}.cardname`}
                                />
                              </div>
                              <div className="relative flex flex-col justify-center space-y-4 align-middle ">
                                <h2>Enter Defination<sup className="font-medium text-xl text-red-700">*</sup></h2>
                                
                                <Field
                                  as="textarea"
                                  name={`cards.${index}.carddescription`}
                                  className="resize-none  border-slate-400 h-11 rounded-md focus:h-24 p-2 lg:w-72 md:w-72 resize-none transition-all ease-in-out bg-gray-50 border duration-500  text-gray-900 text-sm "
                                />{" "}
                                {/* <span className="absolute left-[8.5rem] -top-[1rem] text-lg font-medium">
                                  *
                                </span> */}
                                <ErrorMessage
                                  component={"div"}
                                  className="text-sm text-red-500"
                                  name={`cards.${index}.carddescription`}
                                />
                              </div>

                              <div className="flex items-center space-x-2  mt-8">
                                {/* BUTTON TO SELECT THE IMAGE FOR CARDS */}

                                {cardImg && cardImg[index] ? (
                                  <img
                                    src={cardImg[index]}
                                    alt="cardImg"
                                    className="w-28 h-28 object-contain"
                                  />
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      filePickerForCard?.current?.click();
                                    }}
                                    name={`cards.${index}.cardimg`}
                                    className={`hidden lg:flex lg:items-center lg:w-[16rem] px-2 py-2 bg-white border-2 border-blue-600 active:border-slate-300 text-blue-700 font-semibold rounded-md space-x-2 }`}
                                  >
                                    <PlusOutlined />
                                    <span>Select Image</span>
                                    <input
                                      type="file"
                                      name={`cards.${index}.cardimg`}
                                      ref={filePickerForCard}
                                      value={cardImg[index]}
                                      onChange={(e) => {
                                        const file1 = e.target.files[0];
                                        const readerForCardImg =
                                          new FileReader();
                                        readerForCardImg.readAsDataURL(file1);

                                        readerForCardImg.onload = () => {
                                          setFieldValue(
                                            "cardimg",
                                            readerForCardImg.result
                                          );
                                          setCardImg((prev) => ({...prev, [index]: readerForCardImg.result}));
                                        };
                                      }}
                                      hidden
                                    />
                                  </button>
                                )}

                                <div className="flex items-center justify-around w-full md:flex-col md:space-y-5 md:mt-5">
                                  <button
                                    type="button"
                                    onClick={() => arrayHelper.remove(index)}
                                  >
                                    <TrashIcon className="h-6 text-slate-500" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => editRef.current.focus()}
                                  >
                                    <PencilAltIcon className="h-6 text-blue-600" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : null}


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
                      className="flex items-center space-x-2 text-blue-600 font-medium text-sm bg-white w-full mb-5 px-5 py-2"
                    >
                      <PlusOutlined />
                      <span>Add More</span>
                    </button>
                    <div className="flex justify-center w-full">
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="py-2 px-6  bg-red-600 text-white rounded-md " style={{marginBottom:'79px'}}
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
