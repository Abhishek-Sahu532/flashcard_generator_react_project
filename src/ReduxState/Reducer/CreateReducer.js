import { SET_CART_DATA } from "../Action/ActionTypes";

let initialState = [
    {
      createGroup: "Javascript",
      imageFile: "",
      groupDescription: "Js is the best",
      key: 1,
      addTerm: "first demo card",
      addDefination: " first demo defination",
      imageUpload: "image uploaded",
    },
];

const CreateReducer = (state = initialState, action) => {
  if (action.type === SET_CART_DATA) {
    return [
      ...state,
      {
        createGroup: action.data.createGroup,
        imageFile: action.data.imageFile,
        groupDescription: action.data.groupDescription,
        key: action.data2,
        addTerm: action.data2.addTerm,
        addDefination: action.data2.addDefination,
        imageUpload: action.data2.imageUpload,
      },
    ];
  } else {
    return state;
  }
};

export default CreateReducer;

// convert object to string and store in localStorage
export const saveToLocalStorage =(initialState) =>{
  try {
    const serialisedState = JSON.stringify(initialState);
    localStorage.setItem("cardValue", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}


export const loadFromLocalStorage =() =>{
  try {

    const serialisedState = localStorage.getItem("cardValue");
    if (serialisedState === null) {
    
       return undefined
    }else{
       return JSON.parse(serialisedState);
     
  } 

  } catch (e) {
    console.log(e);
    return undefined;
  }
}
