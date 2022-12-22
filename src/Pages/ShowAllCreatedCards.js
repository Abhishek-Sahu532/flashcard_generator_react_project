import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {RiArrowGoBackLine} from 'react-icons/ri'
import {IoDownloadOutline, IoPrintOutline} from 'react-icons/io5'
import {BiArrowBack} from 'react-icons/bi'
import ShareCom from '../components/ShareCom'


const ShowAllCreatedCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isModalClose = () => {setIsOpen(false)}
  const isModalOpen =()=>{ setIsOpen(true)}
  
  const {groupId} = useParams();
  const navigate = useNavigate();

//will receive the data from the store
  const cards = useSelector((state)=> state.flashcard.flashcards)
  const [ourCard, setOurCard] = useState({})
  
  const [displayCard , setDisplayCard]= useState({});
//singleCardDetail == displaycard


//Function to set the card in middle of the screen which selected by the user from the left sticky menu

//displaycard = showCard

const showCard =(id)=>{
    const displaySingleCard = ourCard.cards.filter((a)=>a.cardid === id);
    setDisplayCard(displaySingleCard[0])
}


useEffect (()=>{
    if(!groupId || !cards) return;
    //Filter the card from the received data as per user selection
    const temp = cards.filter((a)=> a.card.groupid === groupId);
    setOurCard(temp[0].card)
},[groupId] )


useEffect(()=>{
    ourCard.cards && setDisplayCard(ourCard.cards[0])
},[ourCard])
  return (
    <>
      <section className="flex flex-col text-slate-700">
        <header className="flex">
          <BiArrowBack
            className="text-3xl mr-6 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <div className="flex flex-col">
            <h2 className="text-xl text-black font-bold">
              {ourCard.groupname}
            </h2>
            {ourCard.groupdescription && (
              <p className=" my-2">{ourCard.groupdescription}</p>
            )}
          </div>
        </header>

        <main className="grid grid-rows-1 md:grid-cols-4 mt-6">
          <aside className="col-span-1 bg-white w-[60vw] md:w-[10rem] xl:w-[17rem] m-5 px-1 py-2 h-fit rounded-md">
            <h1 className="p-3">Flashcards</h1>
            <hr />
            {ourCard.cards &&
              ourCard.cards.map((card) => (
                <p
                  key={card.cardid}
                  className={`py-2 px-8 text-slate-700 font-medium hover:bg-slate-100 cursor-pointer ${
                    card.cardid === displayCard.cardid &&
                    "!text-red-500 !font-bold"
                  }`}
                  onClick={() => showCard(card.cardid)}
                >
                  {" "}
                  {card.cardname}
                </p>
              ))}
          </aside>
          {/*middle part */}
          <section className="col-span-3 md:col-span-2 flex flex-col xl:flex-row items-center w-full bg-white shadow-lg rounded-lg">
            <p className="w-full p-6 py-10">{displayCard.carddescription} </p>
          </section>
          {/*right part */}
          <aside className="col-span-1 hidden md:flex flex-col items-center space-y-5">
            <button
              type="button"
              onClick={isModalOpen}
              className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105"
            >
              {" "}
              <RiArrowGoBackLine className="scale-x-[-1] " />{" "}
              <span className="hidden x-l:block">Share</span>{" "}
            </button>

            <button className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105">
              <IoDownloadOutline />
              <span className="hidden xl:block">Download</span>
            </button>
            <button className="flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105">
              <IoPrintOutline />
              <span className="hidden xl:block">Print</span>
            </button>
          </aside>
        </main>
        <ShareCom isOpen={isOpen} closeModal ={isModalClose} />
      </section>
    </>
  );
}

export default ShowAllCreatedCards