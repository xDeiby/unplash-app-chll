import { createContext, useReducer } from "react";
import { galleryContextReducer, INITIAL_STATE } from "./galleryContextReducer";

export const GalleryContext = createContext();

const GalleryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(galleryContextReducer, INITIAL_STATE);

  return (
    <GalleryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContextProvider;
