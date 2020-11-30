import React from "react";
import * as SQlite from "expo-sqlite";

// Crea y abre la base de datos
const db = SQLite.openDatabase("Statistics.db");

// Funcionalidades de la base de datos

// Obtener las notas del usuario
const getGrafic = (setGraficFunc) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from Grafic",
        [],
        (_, { rows: { _array } }) => {
          setGraficFunc(_array);
        },
        (_t, error) => {
          console.log("Error al momento de obtener las Graficas");
          console.log(error);
        },
        (_t, _success) => {
          console.log("Graficas obtenidas");
        }
      );
    });
  };
  // Insertar grafica
const insertGrafic = (IdTipo,Name,Lables,Data, successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into Grafic (idTipo,name,lables,data) values (?,?,?,?)", 
        [IdTipo,Name,Lables,Data]);
      },
      (_t, error) => {
        console.log("Error al insertar la Grafica");
        console.log(error);
      },
      (_t, _success) => {
        successFunc;
      }
    );
  };
    // Insertar Tipo
const insertGrafic = (successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql(` insert into Tipo(name) values (LineChart),
                                               values (BarChart),
                                               values (PieChart),
                                               values (ProgressChart),
                                               values (ContributionGraph),
                                               values (StackedBarChart)`
        );
      },
      (_t, error) => {
        console.log("Error al insertar el tipo");
        console.log(error);
      },
      (_t, _success) => {
        successFunc;
      }
    );
  };
  // Borrar la base de datos
const dropDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table Grafic");
        },
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.log("Error al eliminar la tabla de Graficas");
          reject(error);
        }
      );
    });
  };
  // Creación de la tabla de Grafic
const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `create table if not exists Grafic (id integer primary key AUTOINCREMENT,
                                                idTipo integer not null,
                                                name text ,
                                                lables text not null,
                                                data text not null,
                                                Date DATETIME DEFAULT CURRENT_DATE )` 
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };ç
  //tabla de tipo
  const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `create table if not exists tipo (id integer primary key AUTOINCREMENT,
                                                name text 
                                                 )` 
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };
export const db = {
    getGrafic,
    insertGrafic,
    dropDatabaseTableAsync,
    setupDatabaseTableAsync,
  };