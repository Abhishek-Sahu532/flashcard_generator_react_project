import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoDownloadOutline, IoPrintOutline } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import demoImgCard from "../Images/demoCardImg.jpg";
import ShareCom from "../Components/ShareCom";
import ReactToPrint from "react-to-print";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const handlePrint = () => {
  window.print();
};
const ShowAllCreatedCards = ({ theme }) => {
  const componentRef = useRef();
  const { groupId } = useParams();
  const navigate = useNavigate();

  //will receive the data from the store
  const cards = useSelector((state) => state.flashcard.flashcards);
  console.log(cards)
  const [ourCard, setOurCard] = useState({});
  const [displayCard, setDisplayCard] = useState({});

  //Function to set the card in middle of the screen which selected by the user from the left sticky menu
  const showCard = (id) => {
    const displaySingleCard = ourCard.cards.filter((a) => a.cardid === id);
    setDisplayCard(displaySingleCard[0]);
  };

  useEffect(() => {
    if (!groupId || !cards) return;
    //Filter the card from the received data as per user selection
    const temp = cards.filter((a) => a.card.groupid === groupId);
    setOurCard(temp[0].card);
  }, [groupId, cards]);

  useEffect(() => {
    ourCard.cards && setDisplayCard(ourCard.cards[0]);
  }, [ourCard]);

  return (
    <>
      <section className="flex flex-col text-slate-700">
        <header className="flex">
          <BiArrowBack
            className="text-3xl mr-6 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <div className="flex flex-col">
            <h2
              className={`text-xl text-${
                theme === "dark" ? "white" : "bg-slate-600"
              } font-bold`}
            >
              {ourCard.groupname}
            </h2>
            {ourCard.groupdescription && (
              <p
                className={` my-2 text-${
                  theme === "dark" ? "white" : "bg-slate-600"
                } `}
              >
                {ourCard.groupdescription}
              </p>
            )}
          </div>
        </header>
        <main className="grid grid-rows-1  md:grid-cols-4 mt-6 mb-10">
          <aside
            className={`col-span-1 bg-${
              theme === "dark" ? "dark" : "white"
            }  w-[60vw] md:w-[10rem] xl:w-[15rem] md:m-5 mr-5 px-1 py-2 h-fit rounded-md border-2 sm:w-[83vw] sm:mx-5  `}
          >
            <h1 className="p-3">Flashcards</h1>
            <hr />
            <hr className="mb-2" />
            {/* CREATING SIDE MENU */}
            {ourCard.cards &&
              ourCard.cards.map((card) => (
                <p
                  key={card.cardid}
                  className={`py-3 px-3 text-slate-700 bg-${
                    theme === "dark" ? "slate-600" : "white"
                  }  font-medium hover:bg-slate-100 cursor-pointer ${
                    card.cardid === displayCard.cardid &&
                    "!text-red-500 !font-bold"
                  }`}
                  onClick={() => showCard(card.cardid)}
                >
                  {" "}
                  {card.cardname}
                </p>
              ))}
            <div className="carousel_control">
            </div>
          </aside>
          {/*middle part */}
          <section
            ref={componentRef}
            className={`col-span-3 md:col-span-2 md:m-1 flex flex-col xl:flex-row sm:my-5 items-center w-full bg-${
              theme === "dark" ? "dark" : "white"
            }  shadow-lg rounded-lg md:flex-col border-2`}
          >

            {displayCard.cardimg ? (
              <img
                className="object-contain w-[32rem] xl:w-[20vw] h-full p-6"
                src={displayCard.cardimg}
                alt={displayCard.cardimg}
              />
            ) : (
              <img
                src={demoImgCard}
                alt="cardimage"
                className="object-contain w-[32rem] xl:w-[20vw] h-full p-6"
              />
            )}

            <p
              className={`w-full p-6 py-10 text-${
                theme === "dark" ? "white" : "slate-600"
              }`}
            >
              {displayCard.carddescription}{" "}
            </p>
          </section>
          {/*right part */}
          <aside className="col-span-1 md:flex flex-col items-center ">
            <div
              className={`flex items-center   w-[60vw] md:w-[10rem] xl:w-[15rem] md:m-5 mr-5 px-1 py-2 h-fit rounded-md border-2 sm:w-[83vw] sm:mx-5 hover:scale-105 mt-2 `}
            >
              <ShareCom  />
            </div>

            <div className={`flex items-center  w-[60vw] md:w-[10rem] xl:w-[15rem] md:m-5 mr-5 px-1 py-2 h-fit rounded-md border-2 sm:w-[83vw] sm:mx-5 hover:scale-105  mt-2`}>
              <button
                className={`flex items-center py-3 px-4 xl:w-60 space-x-5  text-${
                  theme === "dark" ? "white" : "slate-600"
                } rounded-md shadow-lg  transition-all duration-100 hover:scale-105 border-2 sm:border-none`}
                onClick ={handlePrint}
              >
                <IoDownloadOutline />
                <span className="md:hidden xl:block">Download</span>
              </button>
            </div>
            <div className={`flex items-center  w-[60vw] md:w-[10rem] xl:w-[15rem] md:m-5 mr-5 px-1 py-2 h-fit rounded-md border-2 sm:w-[83vw] sm:mx-5 hover:scale-105 mt-2 `}>
              <ReactToPrint
                trigger={() => (
                  <button
                    onClick={handlePrint}
                    className={`flex items-center py-3 px-4 xl:w-60 space-x-5 bg-${
                      theme === "dark" ? "dark" : "white"
                    } text-${
                      theme === "dark" ? "white" : "slate-600"
                    } rounded-md shadow-lg  transition-all duration-100 hover:scale-105 border-2 sm:border-none`}
                  >
                    <IoPrintOutline />
                    <span className="md:hidden xl:block  ">Print</span>
                  </button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </aside>
        </main>
      </section>
    </>
  );
};

export default ShowAllCreatedCards;
