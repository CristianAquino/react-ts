import { ChangeEvent, forwardRef } from "react";

export type InputUploadImageProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputUploadImage = forwardRef<any, InputUploadImageProps>(
  ({ onChange }, ref) => {
    return <input ref={ref} type="file" multiple hidden onChange={onChange} />;
  }
);

export default InputUploadImage;
