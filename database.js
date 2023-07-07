import SQLite from 'react-native-sqlite-storage';
import { NativeModules } from 'react-native';

const databaseName = 'local.db';
const databaseVersion = '1.0';
const databaseDisplayname = 'Hangouts Database';
const databaseSize = 200000;

SQLite.enablePromise(true);

const openDatabase = async () => {
	try {
		const db = await SQLite.openDatabase({
		name: databaseName,
		location: 'default',
		createFromLocation: `~/${NativeModules.SourceCode.scriptURL.split('/').slice(0, -1).join('/')}/www/local.db`,
		importFrom: `~/${NativeModules.SourceCode.scriptURL.split('/').slice(0, -1).join('/')}/www/local.db`,
		version: databaseVersion,
		displayName: databaseDisplayname,
		size: databaseSize,
		});
		return db;
	} catch (error) {
		console.error('Error opening database:', error);
		throw error;
	}
};

export const getDatabase = async () => {
	const db = await openDatabase();
	return db;
};