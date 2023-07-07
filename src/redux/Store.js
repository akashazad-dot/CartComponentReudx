import { configureStore } from "@reduxjs/toolkit";
// import messsageReducer from "./Slices/MessageSlice";
// import NoteSlice from "./Slices/NoteSlice";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/CartSlice";
export default configureStore({
  reducer: {
    // messsageReducer,
    // notesReducer: NoteSlice,
    productReducer,
    cartReducer,
  },
});
