import { useEffect } from "react";

const useAsync = (
  asyncFn: any,
  successFunction: any,
  returnFunction: any,
  dependencies = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((res) => {
      if (isActive) successFunction(res);
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
};
export default useAsync;
