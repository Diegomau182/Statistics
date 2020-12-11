import React, { useEffect, useState } from "react";
import { database } from "../components/db";

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const loadDatabase = async () => {
    try {
     //await database.dropDatabaseTableTypeAsync();
     //await database.dropDatabaseTableGraficAsync();
     //await database.setupDatabaseTableTypeAsync();
     //await database.setupDatabaseTableGraficAsync();
     //await database.setupTypeAsync();
     //await database.setupGraficAsync();
      // Finaliza la carga de la DB
      setIsLoadingComplete(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDatabase();
  }, []);

  return isLoadingComplete;
};

export default useDatabase;