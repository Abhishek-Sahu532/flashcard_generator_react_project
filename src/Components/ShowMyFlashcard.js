// import { useSelector } from "react-redux";
// import { Store } from '../ReduxState/Store/Store';
import { object } from "yup/lib/locale";
import { lodeDataFromLocalStorage } from "../localStorage/index";
const ShowMyFlashcard = () => {
  // const createGroup = useSelector(state => state.create[0].createGroup);
  // const groupDescription = useSelector(
  //   (state) => state.create[0].groupDescription
  // );
  // console.log(Store.getState())

  let data = lodeDataFromLocalStorage();

  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].createGroup);
  // }
// console.log( Object.values(data), Object.keys(data))
// console.log(Object.entries(data))
  return (
    //  {/* SECTION TO SHOW CREATED ALL CARDS*/}

    <div className="mx-10 my-10 grid grid-cols-3 gap-4 place-content-around flex flex-wrap justify-items-center">
      {data.forEach((element) => {
        <div className=" shadow-md bg-white p-5 h-64 w-64 m-4 mx-1.5 my-1.5">
          <h1 className="text-center font-bold mx-1.5 my-1.5">
            {/* {element.createGroup} */}
            abc
          </h1>
          <div className="text-center bg-white mx-1.5 my-1.5 h-32 w-48">
            {/* <span>{element.groupDescription}</span> */}abc
          </div>
          <div className="flex justify-center">
            <button className="rounded-md text-red-600 border-solid border-2 bg-white border-red-700 mx-2 my-2 h-8 w-40">
              View Cards
            </button>
          </div>
        </div>;
      })}

    </div>
  );
};

export default ShowMyFlashcard;
