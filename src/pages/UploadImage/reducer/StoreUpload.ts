import { UploadImageReducer } from "../models";

const enum STORE_UPLOAD_TYPE {
  ADDFILES = "addfiles",
  DELETEFILE = "deletefile",
  REVERSEFILES = "reversefiles",
  RESET = "reset",
  EDITIMAGE = "editimage",
}

const uploadReducer = (state: File[], action: UploadImageReducer): File[] => {
  switch (action.type) {
    case STORE_UPLOAD_TYPE.ADDFILES: {
      return [...state, ...action.payload];
    }
    case STORE_UPLOAD_TYPE.DELETEFILE: {
      const filterDelete = state.filter(
        (value) => value.name !== action.payload?.name
      );
      return filterDelete;
    }
    case STORE_UPLOAD_TYPE.REVERSEFILES: {
      const newPreviwImage = structuredClone(state);
      newPreviwImage.reverse();
      return newPreviwImage;
    }
    case STORE_UPLOAD_TYPE.RESET: {
      return [];
    }
    case STORE_UPLOAD_TYPE.EDITIMAGE: {
      const { image, index } = action.payload;
      return [...state.slice(0, index), image, ...state.slice(index + 1)];
      // const editImage = state.map((element, indexE) => {
      //   if (indexE === index) {
      //     return image;
      //   }
      //   return element;
      // });
      // return editImage;
      return state;
    }
    default:
      return state;
  }
};

export { STORE_UPLOAD_TYPE, uploadReducer };
