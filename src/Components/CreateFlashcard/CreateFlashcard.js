import React from "react";
import CreateGroup from "./CreateGroup";
import FlashcardDetails from "./FlashcardDetails";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreatores } from "../../ReduxState/Action/index";
import { useState } from "react";

//parent

//callback funtion to get data from fist child
function CreateFlashcard() {
  let dataFromchild1 = {};
  let dataFromchild2 = {};

  let handleCallback = (childData) => {
    dataFromchild1 = childData;
  };

  //callback function to get data from second child
  let handleCallback2 = (childData) => {
    dataFromchild2 = childData;
  };

  //for state update

  const dispatch = useDispatch();
  const { add_to_cart, delete_to_cart } = bindActionCreators(
    actionCreatores,
    dispatch
  );
  const formSubmit = () => {
    dispatch(actionCreatores.add_to_cart(dataFromchild1, dataFromchild2));
  };

  return (
    <>
      <div className="container mt-10 mx-auto ">
        <h1 className="text-lg font-bold ml-10 text-slate-500 ">
          Create Flashcard
        </h1>
        <CreateGroup parentCallback={handleCallback} />
        <FlashcardDetails parentCallback={handleCallback2} />
        <button
          className="flex justify-center mx-auto my-auto bg-red-500 hover:bg-blue-500 text-white font-bold py-1 w-40  px-1 p-10 rounded"
          onClick={formSubmit}
        >
          {" "}
          Create{" "}
        </button>
      </div>
    </>
  );
}

export default CreateFlashcard;
