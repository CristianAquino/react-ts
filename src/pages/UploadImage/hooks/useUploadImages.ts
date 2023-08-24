import { ChangeEvent, useRef } from "react";
import { useCustomerContext } from "../../FilterProducts/hooks";
import { UploadImageContext } from "../../../context";
import { STORE_UPLOAD_TYPE } from "../reducer";
import { validationImage, notifyError } from "../utils";

export const useUploadImage = () => {
  const imgRef = useRef<any>(null);

  const { dispatch } = useCustomerContext(UploadImageContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.files && e.target.files.length > 0)) return;
    let cont = 0;
    const files = e.target.files;
    for (let file of files) {
      if (validationImage(file)) {
        dispatch({ type: STORE_UPLOAD_TYPE.ADDFILES, payload: file });
      } else {
        cont++;
      }
    }
    if (cont !== 0) {
      notifyError("SE ENCONTRARON ELEMENTOS QUE NO SON VALIDOS");
    }
  };
  const handleEdit = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!(e.target.files && e.target.files[0])) return;
    let cont = 0;
    const file = e.target.files[0];
    if (validationImage(file)) {
      dispatch({
        type: STORE_UPLOAD_TYPE.EDITIMAGE,
        payload: { image: file, index },
      });
    } else {
      cont++;
    }
    if (cont !== 0) {
      notifyError("ELEMENTO NO VALIDO");
    }
  };
  return [imgRef, handleChange, handleEdit] as const;
};
