import { createContext, useReducer } from "react";
import { uploadReducer } from "../pages/UploadImage/reducer/StoreUpload";
import { UploadImageReducer } from "../pages/UploadImage/models";

export const UploadImageContext = createContext({
  images: [] as File[],
  dispatch: ({}: UploadImageReducer) => {},
});

export const UploadImageProvider = ({ children }: any) => {
  const [images, dispatch] = useReducer(uploadReducer, []);
  const sharedUpload = { images, dispatch };
  return (
    <UploadImageContext.Provider value={sharedUpload}>
      {children}
    </UploadImageContext.Provider>
  );
};
