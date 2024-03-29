import React from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import DefaultImg from "../Images/defaultImageForGrp.jpg";

//default flash card to show when no cards added in the store
const DefaultMyFlashcard = ({ flashcard }) => {
  // const flashcard = useSelector((state) => state.flashcard.flashcards);
  //  console.log(flashcard)
  const navigate = useNavigate();
  return (
    <div
      key={flashcard.groupid}
      className="p-4 m-5 mx-auto flex flex-col space-y-3 items-center justify-center bg-white rounded-md text-black w-[23rem] h-[13rem] relative border-2 border-slate-200"
    >

      <div className="absolute -top-9">
        {flashcard.groupimg ? (
          <img
            className=" rounded-full w-16 h-16 object cover aspect-square"
            src={flashcard.groupimg}
            alt={flashcard.groupname}
          />
        ) : (
          <img
            className="rounded-full w-16 h-16 object-cover aspect-square"
            src={DefaultImg}
            alt="flashcard.groupname"
          />
        )}
      </div>

      <h2 className="font-bold text-lg">{flashcard.groupname}</h2>
      <p className="text-center font-medium text-sm text-slate-700 line-clammp-2">
        {flashcard.groupdescription}
      </p>
      <p className="font-medium text-sm text-slate-700">
        {/* {flashcard.cards ? flashcard.card.length : 0}Cards{" "} */}
      </p>
      <button
        onClick={() => {
          navigate(`/showallcreatedcards/${flashcard.groupid}`);
        }}
        className="py-1 px-16 text-red-600 font-bold rounded-sm border-red-600 ring-2 ring-red-600"
      >
        {" "}
        View Cards
      </button>
    </div>

  )
}

export default DefaultMyFlashcard;