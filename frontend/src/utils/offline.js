import { DatabaseConnection } from "../database/connection";

export var db = DatabaseConnection.getConnection();

export const Offline = (data) => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS punctuatedroutes " +
          "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
          "ltStart DOUBLE," +
          "LgSatrt DOUBLE, timeStart DOUBLE, ltEnd DOUBLE," +
          "lgEnd DOUBLE, timeEnd DOUBLE)"
      );
    });
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO punctuatedroutes (ltStart, LgSatrt, timeStart, ltEnd, lgEnd, timeEnd)" +
          "values (?, ?, ?, ?, ?, ?)",
        [
          data.ltStart,
          data.LgSatrt,
          data.timeStart,
          data.ltEnd,
          data.lgEnd,
          data.timeEnd,
        ]
      );
    });
  } catch (e) {
    console.log(e);
  }
};
