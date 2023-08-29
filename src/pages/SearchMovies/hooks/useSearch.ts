import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState<null | string>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede realizar la busqueda con un campo vacio");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede realizar la busqueda con un numero");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda debe tener mas de 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error };
};
