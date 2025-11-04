import * as SQLite from "expo-sqlite";

let db;

export const initDB = async () => {
  try {
    db = await SQLite.openDatabaseAsync("grocery.db");

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        quantity TEXT
      );
    `);

    console.log("Base de datos inicializada correctamente");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
  }
};

export const getItems = async () => {
  try {
    if (!db) await initDB();
    const result = await db.getAllAsync("SELECT * FROM items;");
    return result;
  } catch (error) {
    console.error("Error al obtener ítems:", error);
    return [];
  }
};

export const addItem = async (name, quantity) => {
  try {
    if (!db) await initDB();
    await db.runAsync(
      "INSERT INTO items (name, quantity) VALUES (?, ?);",
      [name, quantity]
    );
  } catch (error) {
    console.error("Error al agregar ítem:", error);
  }
};

export const updateItem = async (id, name, quantity) => {
  try {
    if (!db) await initDB();
    await db.runAsync(
      "UPDATE items SET name = ?, quantity = ? WHERE id = ?;",
      [name, quantity, id]
    );
  } catch (error) {
    console.error("Error al actualizar ítem:", error);
  }
};

export const deleteItem = async (id) => {
  try {
    if (!db) await initDB();
    await db.runAsync("DELETE FROM items WHERE id = ?;", [id]);
  } catch (error) {
    console.error("Error al eliminar ítem:", error);
  }
};
