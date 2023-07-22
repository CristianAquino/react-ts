import { TypeWithKey } from "../models";

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Network Error",
  };

  return codeMatcher[errorCode];
};
