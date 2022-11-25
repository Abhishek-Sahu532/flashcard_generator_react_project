import React from "react";
import CreateGroup from "./CreateGroup";
import FlashcardDetails from "./FlashcardDetails";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import {bindActionCreators} from 'redux'
//parent
// import { add_to_cart } from "../../ReduxState/Action/SetData";
import actionCreators from '../../ReduxState/index'
//callback funtion to get data from fist child
function CreateFlashcard() {

  let dataFromParent ={}
  let handleCallback = (childData) => {
    dataFromParent += childData
  };

  //callback function to get data from second child
  let handleCallback2 = (childData) => {
    console.log(childData);
  };

//for state update

const dispatch = useDispatch()

const { add_to_cart } = bindActionCreators(actionCreators, dispatch);

  //disable the second component and button

  // const [disabled, setDisabled] = useState(true)

  // const disableChange =()=>{
  //  console.log('abc')
  // }
  return (
    <>
      <div className="container mt-10 mx-auto ">
        <h1 className="text-lg font-bold ml-10 text-slate-500 ">
          Create Flashcard
        </h1>
        <CreateGroup parentCallback={handleCallback} />
        <FlashcardDetails parentCallback2={handleCallback2} />
        <button className="flex justify-center mx-auto my-auto bg-red-500 hover:bg-blue-500 text-white font-bold py-1 w-40  px-1 p-10 rounded" onClick={()=>{dispatch(actionCreators.add_to_cart(dataFromParent));}}>
          Create
        </button>
      </div>
    </>
  );
}

export default CreateFlashcard;
