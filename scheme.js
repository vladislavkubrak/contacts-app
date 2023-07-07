import { getDatabase } from './database';

const createUsersTable = async () => {
  const db = await getDatabase();

  const query = `
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      surname TEXT,
      phone TEXT,
      shortName TEXT
    );
  `;

  return db.executeSql(query);
};

const createChatsTable = async () => {
  const db = await getDatabase();

  const query = `
    CREATE TABLE IF NOT EXISTS Chats (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      friendId INTEGER,
      text TEXT
    );
  `;

  return db.executeSql(query);
};

export const initDatabase = async () => {
  try {
    const db = await getDatabase();

    const checkDatabaseExistsQuery = `
      SELECT name FROM sqlite_master WHERE type='table' AND name='Users';
    `;

    const [result] = await db.executeSql(checkDatabaseExistsQuery);

    if (result.rows.length === 0) {
      await createUsersTable();
      await createChatsTable();
    } else {
      console.log('Database already exists');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};