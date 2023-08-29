import { useRef } from "react";

export const useDebounce = (fn: any, delay: number) => {
  const debRef = useRef<any>(null);
  return function () {
    if (debRef.current) {
      clearTimeout(debRef.current);
    }
    const context = this;
    const args = arguments;
    clearTimeout(debRef.current);
    debRef.current = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
