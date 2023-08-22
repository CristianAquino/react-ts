import { ChangeEvent, useRef } from "react";
import { useCustomerContext } from "../../FilterProducts/hooks";
import { UploadImageContext } from "../../../context";
import { STORE_UPLOAD_TYPE } from "../reducer";

export const useUploadImage = () => {
  const imgRef = useRef<any>(null);

  const { dispatch } = useCustomerContext(UploadImageContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.files && e.target.files.length > 0)) return;
    const files = e.target.files;
    dispatch({ type: STORE_UPLOAD_TYPE.ADDFILES, payload: files });
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!(e.target.files && e.target.files[0])) return;
    const file = e.target.files[0];
    dispatch({
      type: STORE_UPLOAD_TYPE.EDITIMAGE,
      payload: { image: file, index },
    });
  };
  return [imgRef, handleChange, handleEdit] as const;
};
