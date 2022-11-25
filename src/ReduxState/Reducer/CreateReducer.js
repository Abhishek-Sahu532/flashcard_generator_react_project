import { SET_CART_DATA } from "../Action/ActionTypes"


let initialState = {
  addCard: {
    createGroup: "Javascript",
    imageFile: "",
    groupDescription: "Js is the best",
    addTerm: "first demo card",
    addDefination: " first demo defination",
    imageUpload: "image uploaded",
  },
};



const  CreateReducer =(state = initialState, action)=>{

    if(action.type === SET_CART_DATA ){
        return {...state,
        addCard :{...state.addCard, }
        }
    }else{
        return state
    }
}

export default CreateReducer;