import React from "react";
import logo from "../../Images/logo.jpg";
function MyFlashcard() {
  return (
    <>
      <div className="bg-slate-300 h-screen">
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
                <h1 className=" mx-4 mb-4 font-bold ">Web 3</h1>
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
            <div className="first px-3 py-2  h-auto w-56 space-y-6 bg-slate-100  mx-5 shadow-xl">
              
              <ul className="">
                <li className=" px-4  mb-4 border-b-[2px] border-gray-400 pb-2">
                  <a className="text-gray-600" href="#">
                    Heading
                  </a>
                </li>
                <li className="px-4 mb-4">
                  <a href="#" className="hover:underline">
                    Card
                  </a>
                </li>
                <li className="px-4 mb-4">
                  <a href="#" className="hover:underline">
                    Card
                  </a>
                </li>
                <li className="px-4 mb-4">
                  <a href="#" className="hover:underline">
                    Card
                  </a>
                </li>
                <li className="px-4 mb-4">
                  <a href="#" className="hover:underline">
                    Card
                  </a>
                </li>
                <li className="px-4">
                  <a href="#" className="hover:underline">
                    Card
                  </a>
                </li>
              </ul>
            </div>

            <div className=" middle flex items-start p-2  h-auto w-2/3 bg-slate-100 mx-5 shadow-xl">
              {/* < classname='flex item-start justify-center'> */}
              <div className="p-10 ">
                <img className="w-screen" src={logo} alt="" />
              </div>
              <div className="p-10 w-auto">
                Block 2 Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Accusantium, culpa? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Illum doloremque eum hic in quis nam culpa
                commodi officia qui error reiciendis, exercitationem accusamus
                et quod a dolor ea voluptas. Officia.
              </div>
            </div>

            <div className=" last p-2  h-auto  mx-5">
              <div className="btn ">
                <button class="bg-white flex w-44 mb-4 hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded shadow-xl">
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
                      d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
                    />
                  </svg>
                  <p className="px-4">Share</p>
                </button>
              </div>
              <div className="btn ">
                <button class="bg-white flex w-44 mb-4 hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded shadow-xl">
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
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                  <p className="px-4">Download</p>
                </button>
              </div>
              <div className="btn ">
                <button class="bg-white flex  w-44 hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded shadow-xl">
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
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                    />
                  </svg>
                  <p className="px-4">Print</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE SECTION  */}

        <div className="pagination flex justify-center mt-20  ">
          <div className="pag-item flex  items-baseline shadow-xl cursor-pointer">
            <svg
              className="mx-4 text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p className="text-blue-700">1/6</p>
            <svg
              className="mx-4 text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default MyFlashcard;
