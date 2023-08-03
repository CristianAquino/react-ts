import { ErrorCodeModel } from "../models";

const validationError = (errorCode: any) => {
  const codeMatch: ErrorCodeModel<string> = {
    ERR_NETWORK: "Axios Error - Network Error",
  };
  return codeMatch[errorCode];
};

export { validationError };
