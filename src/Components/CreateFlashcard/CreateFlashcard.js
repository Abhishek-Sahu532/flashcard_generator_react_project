import React from "react"; 
import CreateGroup from "./CreateGroup";

function CreateFlashcard(){
    return(
        <>
        <div className="container mt-10 mx-auto ">
        <h1 className="text-lg font-bold ml-5">Create Flashcard</h1>
        <CreateGroup />

        </div>
        </>

    )
}

export default CreateFlashcard;