import React from "react"; 
import CreateGroup from "./CreateGroup";
import FlashcardDetails from "./FlashcardDetails";
import { useState } from "react";

//parent

function CreateFlashcard(){
  
  let handleCallback = (childData) => {
    console.log(childData);
  };

  let handleCallback2 =(childData) =>{
    console.log(childData)
  }

    return (
      <>
        <div className="container mt-10 mx-auto ">
          <h1 className="text-lg font-bold ml-10 text-slate-500 ">
            Create Flashcard
          </h1>
          <CreateGroup  parentCallback={handleCallback}/>
          <FlashcardDetails  parentCallback2={handleCallback2}/>
          <button className="flex justify-center mx-auto my-auto bg-red-500 hover:bg-blue-500 text-white font-bold py-1 w-40  px-1 p-10 rounded">
            Create
          </button>
        </div>
      </>
    );
}

export default CreateFlashcard;