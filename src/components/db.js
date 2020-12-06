import React from "react";
import * as SQlite from "expo-sqlite";

// Crea y abre la base de datos
const db = SQlite.openDatabase("Statistics.db");

// Funcionalidades de la base de datos

// Obtener las notas del usuario
const getGrafic = (setGraficFunc) => {
    db.transaction((tx) => {
      tx.executeSql(
        `
         select * from type`,
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
        tx.executeSql("insert into Grafic(idTipo,name,lables,data) values (?,?,?,?)", 
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
  // Borrar la base de datos
const dropDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table Grafic; drop table type");
          console.log("se borraron");
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
  // Creación de la tabla de Grafic y tipo
const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `create table if not exists type (id integer primary key AUTOINCREMENT,
                                              name text not null
                                              );

            create table if not exists Grafic (id integer primary key AUTOINCREMENT,
                                                idTipo integer not null,
                                                name text ,
                                                lables text not null,
                                                data text not null,
                                                Date DATETIME DEFAULT CURRENT_DATE,
                                                foreign key (idTipo) references type(id);)` 
          );
          console.log("se crearon las tablas")
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla grafic");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };
  const setupTypeAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(`insert into type(name) values ('LineChart')
          ,('BarChart')
          ,('PieChart')
          ,('ProgressChart');

          insert into Grafic(idTipo,name,lables,Data) values(1,'prueba','Abril,Mayo,Junio,Julio','23,45,66,78')
          `
            );
            console.log("Valores por defecto");
        },
        (_t, error) => {
          console.log("Error al momento de insertar los valores por defecto");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };
export const database = {
    getGrafic,
    insertGrafic,
    dropDatabaseTableAsync,
    setupDatabaseTableAsync,
    setupTypeAsync
  };