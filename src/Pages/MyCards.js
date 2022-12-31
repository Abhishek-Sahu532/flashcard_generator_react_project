import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DefaultMyFlashcard from "../components/DefaultMyFlashcard";
import DemoPic from '../Images/mycardsPageDemo.svg'
const MyCards = () => {
  
  const navigate = useNavigate();
  const flashcard = useSelector((state) => state.flashcard.flashcards);
// console.log(flashcard)
  const [showAll, setShowAll] = useState(false);

  //condition to show cards according to the state

  const showCardLimit = !showAll ? 6 : flashcard.length;

  return (
    <>
      <section className="flex flex-col">
        {flashcard.length > 0 ? (
          <div>
            <div className="flex flex-wrap">
              {flashcard.slice(0, showCardLimit).map(({ card }, index) => (
                <DefaultMyFlashcard key={index} flashcard={card} />
              ))}
            </div>
            <div className="flex justify-end mr-10">
              <button
                className="w-16 mt-1 font-semibold text-lg text-red-600 outline-none border-none active:outline-none active:border-none"
                onClick={() => setShowAll(!showAll)}
              >
                See All
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-white shadow-lg p-30">
            <div className="flex items-center justify-center bg-white shadow-lg p-30">
              <img
                src={DemoPic}
                alt=""
                className="object-fill h-72 w-96 md:object-scale-down "
              />
            </div>
            <h1 className="text-xl text-slate-600">
              Nothing to show, Go to{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Create Flashcard
              </span>
              to Create New
            </h1>
          </div>
        )}
      </section>
    </>
  );
};

export default MyCards;
