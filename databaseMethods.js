import { getDatabase } from './database';

const createUser = async (name, surname, phone) => {
	const db = await getDatabase();
	const shortName = (name[0].toUpperCase() + surname[0].toUpperCase()).toString();

	const query = `
		INSERT INTO Users (name, surname, phone, shortName)
		VALUES (?, ?, ?, ?);
	`;

	const params = [name, surname, phone, shortName];

	return db.executeSql(query, params);
};

const editUser = async (id, name, surname, phone) => {
	const db = await getDatabase();
	const shortName = (name[0].toUpperCase() + surname[0].toUpperCase()).toString();

	const query = `
		UPDATE Users
		SET name = ?, surname = ?, phone = ?, shortName = ?
		WHERE id = ?;
	`;

	const params = [name, surname, phone, shortName, id];

	return db.executeSql(query, params);
};

const deleteUser = async (id) => {
	const db = await getDatabase();

	const query = `
		DELETE FROM Users
		WHERE id = ?;
	`;

	const params = [id];

	return db.executeSql(query, params);
};

const sendMessage = async (userId, friendId, text) => {
	const db = await getDatabase();

	const query = `
		INSERT INTO Chats (userId, friendId, text)
		VALUES (?, ?, ?);
	`;

	const params = [userId, friendId, text];

	return db.executeSql(query, params);
};

const getAllUsers = async () => {
	const db = await getDatabase();

	const query = `
		SELECT * FROM Users;
	`;

	return db.executeSql(query)
		.then(([results]) => {
		const users = [];
		for (let i = 0; i < results.rows.length; i++) {
			const user = results.rows.item(i);
			users.push(user);
		}
		return users;
		})
		.catch(error => {
			console.error('Error retrieving users:', error);
			throw error;
		});
};

const getChatMessages = async (friendId) => {
	const db = await getDatabase();

	const query = `
		SELECT * FROM Chats WHERE friendId = ?;
	`;

	return db.executeSql(query, [friendId])
		.then(([results]) => {
		const messages = [];
		for (let i = 0; i < results.rows.length; i++) {
			const message = results.rows.item(i);
			messages.push(message);
		}
		return messages;
		})
		.catch(error => {
		console.error('Error retrieving chat messages:', error);
		throw error;
		});
};

const getUserById = async (userId) => {
	const db = await getDatabase();

	const query = `
		SELECT * FROM Users WHERE id = ?;
	`;

	return db.executeSql(query, [userId])
		.then(([results]) => {
		if (results.rows.length > 0) {
			return results.rows.item(0);
		} else {
			return null;
		}
		})
		.catch(error => {
		console.error('Error retrieving user:', error);
		throw error;
		});	
};

export { createUser, editUser, deleteUser, sendMessage, getAllUsers, getChatMessages, getUserById };