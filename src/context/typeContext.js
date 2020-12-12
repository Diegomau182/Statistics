import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de los tipos
export const TypeContext = createContext({});

export const TypeContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { type: initialType, children } = props;

  // Almacenar los valores en el estado
  
  const [type, setType] = useState(initialType);

  // Cargar u obtener las graficas
  useEffect(() => {
    refreshType();
  }, []);

 
  const refreshType = () => {
    return database.getType(setType);
  };

  // Crear el objeto de contexto
  const typeContext = {
    type,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <TypeContext.Provider value={typeContext}>
      {children}
    </TypeContext.Provider>
  );
};
