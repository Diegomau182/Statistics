import React from "react";
import * as SQlite from "expo-sqlite";

// Crea y abre la base de datos
const db = SQlite.openDatabase("Statistics.db");

// Funcionalidades de la base de datos

// Obtener las notas del usuario
const getGrafic = (setGraficFunc) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT
        Grafic.name,
        Grafic.id,
        Grafic.Creacion,
        Grafic.lables,
        Grafic.Data,
        type.nameType
      FROM
        Grafic
      INNER JOIN type ON type.id = Grafic.idTipo;`,
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
const insertGrafic = (IdTipo ,Name ,Lables ,Data ,successFunc) => {
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

  //Borrar todas las tablas
  const dropDatabaseTableTypeAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(`drop table type`);
          console.log("se borraron la tabla Type");
        },
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.log("Error al eliminar la tabla de tipos");
          reject(error);
        }
      );
    });
  };
  // Borrar la tabla 
const dropDatabaseTableGraficAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(`drop table Grafic`);
          console.log("se borro la tabla grafic");
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
  const setupDatabaseTableTypeAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `create table if not exists type (id integer primary key AUTOINCREMENT,
              nameType text not null
              ); ` 
          );
          console.log("se creo la tabla type")
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla Type");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };

const setupDatabaseTableGraficAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            ` create table if not exists Grafic (id integer primary key AUTOINCREMENT,
                                                idTipo integer not null,
                                                name text ,
                                                lables text not null,
                                                data text not null,
                                                Creacion DATE DEFAULT (dateTime('now','localtime')),
                                                foreign Key (idTipo) references type(id)
                                                );` 
          );
          console.log("se creo la tabla la grafica")
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
          tx.executeSql(`insert into type(nameType) values (?)
          ,(?),(?),(?)
          `,["LineChart",
              "BarChart",
              "PieChart",
              "ProgressChart"]
            );
            console.log("Valores por defecto type");
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

  const setupGraficAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(`insert into Grafic(idTipo,name,lables,data) 
          values (?,?,?,?)
          `, [1,
            "Prueba Grafica",
             'Abril,Mayo,Junio,Julio',
            "34,56,78,45"]);
            console.log("Valores por defecto grafic");
        },
        (_t, error) => {
          console.log("Error al momento de insertar los valores por grafic");
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
    dropDatabaseTableTypeAsync,
    dropDatabaseTableGraficAsync,
    setupDatabaseTableTypeAsync,
    setupDatabaseTableGraficAsync,
    setupTypeAsync,
    setupGraficAsync
  };