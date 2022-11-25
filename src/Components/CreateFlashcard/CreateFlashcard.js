import React from "react";
import CreateGroup from "./CreateGroup";
import FlashcardDetails from "./FlashcardDetails";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
//parent


import { actionCreatores } from "../../ReduxState/Action/index";


//callback funtion to get data from fist child
function CreateFlashcard() {
  let dataFromParent = {};
  let handleCallback = (childData) => {
    dataFromParent += childData;
  };

  //callback function to get data from second child
  let handleCallback2 = (childData) => {
    console.log(childData);
  };

  //for state update

  const dispatch = useDispatch();

  const { add_to_cart, delete_to_cart } = bindActionCreators(actionCreatores, dispatch);

  return (
    <>
      <div className="container mt-10 mx-auto ">
        <h1 className="text-lg font-bold ml-10 text-slate-500 ">
          Create Flashcard
        </h1>
        <CreateGroup parentCallback={handleCallback} />
        <FlashcardDetails parentCallback2={handleCallback2} />
        <button
          className="flex justify-center mx-auto my-auto bg-red-500 hover:bg-blue-500 text-white font-bold py-1 w-40  px-1 p-10 rounded"
          onClick={() => {
            dispatch(actionCreatores.add_to_cart(dataFromParent));
          }}
        >
          Create
        </button>
      </div>
    </>
  );
}

export default CreateFlashcard;
