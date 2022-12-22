import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from './ParentState'

//created the global state
 const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
  },
});


export default store;