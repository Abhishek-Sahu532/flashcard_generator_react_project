import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Schema from "../components/InputSchema/Schema";
import { nanoid } from "nanoid";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { setFlashCard } from "../DataFromLocalStorage/ParentState";





const CreateFlashCard = () => {
  const dispatch = useDispatch();
  const filePicker = useRef(null);
  const filePickerForCard = useRef(null);
  const editRef = useRef(null);
  const [groupImg, setGroupImg] = useState("");
  const [cardImg, setCardImg] = useState("");

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
<<<<<<< HEAD
        <Form className="form w-full space-y-5 text-slate-600 font-medium">
          {/* upper */}
          <div  className="flex flex-col px-10 py-4 bg-white drop-shadow-lg space-y-4 rounded-md">
            {/* LEFT */}
            <div className="flex flex-col sm:flex-row items-center space-x-10 pt-3">
              <div className="g-name, flex flex-col relative">
=======
        <Form className="w-full space-y-5 text-slate-600 font-medium">
          {/* upper */}
          <div className="flex flex-col px-10 py-4 bg-white drop-shadow-lg space-y-4 rounded-md">
            {/* LEFT */}
            <div className="flex flex-col sm:flex-row items-center space-x-10 pt-3">
              <div className="flex flex-col relative">
>>>>>>> 4127cf4ce401f16cf944712026d07a3e4b5370dd
                <h2>Create Group</h2>
                <Field
                  type="text"
                  name="groupname"
                  className="border-slate-400 md:w-96 border-2 rounded-sm focus:fing-slate-400 focus:border focus:border-slate-400"
                />
                <span className="absolute left-[7rem] text-lg font-medium">
                  *
                </span>
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
          <div className="text-black drop-shadow-lg rounded-lg">
            {/* FieldArray component from Formik which will create Dynamic Form for the custom input */}

            <FieldArray name="cards">
              {(arrayHelper) => {
                const cards = values.cards;
                return (
                  <>
                    {cards && cards.length > 0
                      ? cards.map((card, index) => (
                          <div
                            className="flex items-center space-x-10 bg-white px-5 lg:px-10 py-4"
                            key={index}
                          >
                            <div className="p-2 w-10 h-10 flex items-center justify-center bg-red-600 text-white text-md font-semibold rounded-full">
                              {index + 1}
                            </div>

                            <div className='className="flex flex-col space-y-3 md:space-x-10 md:flex-row"'>
                              <div className="relative flex flex-col justify-center space-y-3">
                                <h2>Enter Term</h2>
                                <Field
                                  type="text"
                                  name={`cards.${index}.cardname`}
                                  innerRef={editRef}
                                  className="border-slate-400 md:w-64 border-2 rounded-sm focus:fing-slate-400 focus:border focus:border-slate-400"
                                />{" "}
                                <span className="absolute left-[5.8rem] -top-[15px] md:top-0 text-lg font-medium">
                                  {" "}
                                  *{" "}
                                </span>
                                <ErrorMessage
                                  component={"div"}
                                  className="text-sm text-red-500"
                                  name={`cards.${index}.cardname`}
                                />
                              </div>
                              <div className="relative flex flex-col justify-center space-y-3">
                                <h2>Enter Defination</h2>
                                
                                <Field
                                  as="textarea"
                                  name={`cards.${index}.carddescription`}
                                  className="resize-none lg:w-72 border-slate-400 md:w-96 md:w-64 border-2 rounded-sm focus:fing-slate-400 focus:border focus:border-slate-400 "
                                />{" "}
                                <span className="absolute left-[8.5rem] -top-[1rem] text-lg font-medium">
                                  *
                                </span>
                                <ErrorMessage
                                  component={"div"}
                                  className="text-sm text-red-500"
                                  name={`cards.${index}.carddescription`}
                                />
                              </div>

                              <div className="flex items-center space-x-2">
                                {/* BUTTON TO SELECT THE IMAGE FOR CARDS */}

                                {cardImg ? (
                                  <img
                                    src={cardImg}
                                    alt="cardImg"
                                    className="w-28 h-28 object-contain"
                                  />
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      filePickerForCard.current.click();
                                    }}
                                    name={`cards.${index}.cardimg`}
                                    className={`hidden lg:flex lg:items-center lg:w-[19rem] px-2 py-2 bg-white border-2 border-blue-600 active:border-slate-300 text-blue-700 font-semibold rounded-md space-x-2 } `}
                                  >
                                    <PlusOutlined />
                                    <span>Select Image</span>
                                    <input
                                      type="file"
                                      name={`cards.${index}.cardimg`}
                                      ref={filePickerForCard}
                                      value={cardImg}
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
                                          setCardImg(readerForCardImg.result);
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
                        className="py-2 px-6  bg-red-600 text-white rounded-md"
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
