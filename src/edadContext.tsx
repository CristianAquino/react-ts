import { useContext, createContext, useState } from "react";

interface EdadContext {
  edad: number;
  setEdad: (value: number) => void;
}

/* es recomendable decir la ts que tipo recibe
xq si usamos el null tendriamos que realizar validaciones */
export const EdadContext = createContext<EdadContext>({} as EdadContext);

function EdadProvider({ children }: any) {
  const [edad, setEdad] = useState<number>(0);

  const sharedEdad: EdadContext = {
    edad,
    setEdad,
  };
  return (
    <EdadContext.Provider value={sharedEdad}>{children}</EdadContext.Provider>
  );
}
// hook
export const useEdad = () => {
  const edadContext = useContext(EdadContext);
  if (!edadContext) {
    throw new Error("useEdad must be used within a EdadProvider");
  }
  return edadContext;
};

export default EdadProvider;
