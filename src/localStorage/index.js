// load string from localStarage and convert into an Object

import { type } from "@testing-library/user-event/dist/type";

// invalid output show as undefined
export const lodeDataFromLocalStorage = () => {
  let cardValueArr = [];

  let cardValue = localStorage.getItem("cardValue");
  if (cardValue == null) {
    cardValue = [];
  } else {
    cardValue = JSON.parse(cardValue);
  }

  for (let i in cardValue) {
    cardValueArr.push(cardValue[i]);
  }

  let cardValueArrindex = cardValueArr[0];

  // const propertyValues=Object.values(cardValueArrindex);
  // console.log(typeof propertyValues);

  //   console.log(cardValueArrindex);
  // console.log(typeof cardValueArrindex)
  return cardValueArrindex;
};
