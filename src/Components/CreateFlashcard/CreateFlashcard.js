import React from "react"; 
import CreateGroup from "./CreateGroup";
import FlashcardDetails from "./FlashcardDetails";

function CreateFlashcard(){
    return(
        <>
        <div className="container mt-10 mx-auto ">
        <h1 className="text-lg font-bold ml-10 text-slate-500 ">Create Flashcard</h1>
        <CreateGroup />
        <FlashcardDetails />

        </div>
        </>

    )
}

export default CreateFlashcard;