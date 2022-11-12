import React from "react";

function MyFlashcard() {
  return (
    <>
      <div>
        <div className="container mx-28 w-auto bg-slate-300 h-auto">
          <div className="text mx-5">
            <div className="heading">
              <div className="arrow pt-5 flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                <h1 className="mx-4 font-bold">Web 3</h1>
              </div>
            </div>
            <p className="mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dolore illum, voluptate qui eligendi voluptas facilis totam
              nemo!Quam eos atque recusandae? Perspiciatis consequuntur dolores
              odio sunt provident obcaecati odit!
            </p>
          </div>
          {/* <div className=""> */}

          <div className="main-con flex items-start justify-center mt-10">
            <div className="first px-3 py-2  h-auto w-60 space-y-6 bg-slate-100  mx-5">
              <p className="text-lg font-semibold">Flashcards</p>
              <hr />
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Lorem, ipsum.
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="hover:underline">
                    Card 2
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="hover:underline">
                    Card 3
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="hover:underline">
                    Card 4
                  </a>
                </li>
                <br />
                <li>
                  <a href="#_" className="hover:underline">
                    Card 5
                  </a>
                </li>
                <br />
              </ul>
            </div>

            <div className=" middle flex items-start p-2  h-auto w-2/3 bg-slate-100 mx-5">
              {/* < classname='flex item-start justify-center'> */}
              <div className="p-10 ">
                Block 2 Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Accusantium, culpa?
              </div>
              <div className="p-10">
                Block 2 Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Accusantium, culpa?
              </div>
            </div>

            <div className=" last p-2  h-auto w-52 bg-slate-100 mx-5">
              <div className="btn">
                
              </div>
            </div>

            
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default MyFlashcard;
