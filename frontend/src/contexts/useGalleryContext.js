import { useContext } from "react";
import { GalleryContext } from "./GalleryContext";

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);

  if (!context) {
    throw new Error(
      "useGalleryContext is out of the scope of GalleryContextProvider"
    );
  }

  return context;
};
