import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de las notas
export const GraficContext = createContext({});

export const GraficContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { grafic: initialGrafic, children } = props;


  // Almacenar los valores en el estado
  const [grafic, setGrafic] = useState(initialGrafic);

  // Guarda los valores en el estado
  const [grafics, setGrafics] = useState("");
  

  // Cargar u obtener las graficas
  useEffect(() => {
    refreshGrafic();
  }, []);

  const refreshGrafic = () => {
    return database.getGrafic(setGrafic);
  };

  const modGrafic = (IdTipo,Name,LablesOne,DataOne,LablesTwo,DataTwo,LablesThree,
    DataThree,LablesFour,DataFour,LablesFive,DataFive,Id) => {
    return database.updateTableGrafic(IdTipo,Name,LablesOne,DataOne,LablesTwo,DataTwo,LablesThree,
      DataThree,LablesFour,DataFour,LablesFive,DataFive,Id, refreshGrafic);
  };
 

  const addNewGrafic = async(IdTipo,Name,LablesOne,DataOne,LablesTwo,DataTwo,LablesThree,
    DataThree,LablesFour,DataFour,LablesFive,DataFive) => {
     return database.insertGrafic(IdTipo,Name,LablesOne,DataOne,LablesTwo,DataTwo,LablesThree,
      DataThree,LablesFour,DataFour,LablesFive,DataFive, refreshGrafic);
  };
  const getGraficById = async (id) => {
    return database.getGraficById(id, setGrafics);
  };

  // Crear el objeto de contexto
  const graficContext = {
    grafic,
    addNewGrafic,
    getGraficById,
    grafics,
    modGrafic
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <GraficContext.Provider value={graficContext}>
      {children}
    </GraficContext.Provider>
  );
};
