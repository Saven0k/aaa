const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database path
const dbPath = path.join(__dirname, "db", "posts.db");

/**
 * Initializing the Database
 */
const db = new sqlite3.Database(dbPath, (err) => {
	if (err) {
		console.error("Ошибка при открытии базы данных:", err.message);
	} else {
		console.log("Подключение к базе данных успешно установлено.");
		db.run(
			`CREATE TABLE IF NOT EXISTS posts (
            id TEXT PRIMARY KEY,
            name TEXT,
            text TEXT,
			for TEXT,
			course TEXT,
			visible TEXT,
			date_created date,
        )`,
			(err) => {
				if (err) {
					console.error("Ошибка при создании таблицы:", err.message);
				} else {
					console.log(
						"Таблица posts успешно создана или уже существует."
					);
				}
			}
		);
		db.run(
			`CREATE TABLE IF NOT EXISTS users (
            id TEXT AUTO_INCREMENT PRIMARY KEY,
            email TEXT,
            password TEXT
        )`,
			(err) => {
				if (err) {
					console.error("Ошибка при создании таблицы:", err.message);
				} else {
					console.log(
						"Таблица users успешно создана или уже существует."
					);
				}
			}
		);
	}
});

/**
 * Function to create id for user
 * @returns {string} ID
 */
function generateUniqueIdForUser() {
	return "user_" + Date.now();
}

/**
 * Function for creating a user
 * @param {string} name
 * @param {string} text
 * @returns Returns a promise that resolves to true if the post was successfully updated, or false if the update failed.
 */
async function createUser(email, password) {
	const userId = generateUniqueIdForUser();
	const sql = `INSERT INTO users (id, email, password) VALUES (?, ?, ?)`;

	return new Promise((resolve, reject) => {
		db.run(sql, [userId, email, password], function (err) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка регистрации пользователя"));
			}

			console.log(`Пользователь добавлен: ${userId}, ${email}`);
			resolve({
				userId,
				message: "Пользователь успешно зарегистрирован",
			});
		});
	});
}

/**
 * // Function to display data from a table
 * @returns list: A list of dictionaries, where each dictionary represents a record from the database.
 */
async function getAllUsers() {
	const sql = `SELECT * FROM users`;

	return new Promise((resolve, reject) => {
		db.all(sql, function (err, rows) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка вывода всех пользователей"));
			}
			console.log("Пользователи выведены");
			resolve(rows);
		});
	});
}

/**
 * Function to update user
 * @param {string} id
 * @param {string} email
 * @param {string} password
 * @returns Returns a promise that resolves to true if the post was successfully updated, or false if the update failed.
 */
async function updateUser(id, email, password) {
	const sql = `UPDATE users SET email = ?, password = ? WHERE id = ?`;

	return new Promise((resolve, reject) => {
		db.run(sql, [email, password, id], function (err) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка обновления пользователя"));
			}
			console.log("Пользователь обновлен");
			resolve("OK");
		});
	});
}

/**
 * Deletes a user from the database.
 * @param {string} id
 * @returns bool: True if the user was successfully deleted, False otherwise.
 */
async function deleteUser(id) {
	const sql = "DELETE FROM users WHERE id = ?";

	return new Promise((resolve, reject) => {
		db.run(sql, [id], (err) => {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				reject(new Error("Ошибка удаление пользователя с id: ", id));
			} else {
				console.log(`Пользователь с id ${id} удален`);
				resolve("OK");
			}
		});
	});
}
/**
 * Find a user from the database.
 * @param {string} email
 * @param {string} password
 * @returns bool: True if the user was finded/ false.
 */
async function findUser(email, password) {
	const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

	return new Promise((resolve, reject) => {
		db.get(sql, [email, password], (err, rows) => {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				reject(false);
			} else {
				console.log(`Пользователь был найден\n`);
				resolve(rows);
			}
		});
	});
}

/**
 * Function to create id for post
 * @returns {string} ID
 */
function generateUniqueIdForPost() {
	return "post_" + Date.now();
}

/**
 * Function for creating a post
 * @param {string} name
 * @param {string} text
 * @returns Returns a promise that resolves to true if the post was successfully updated, or false if the update failed.
 */
async function createPost(name, text, forField, visible, course) {
	const userId = generateUniqueIdForPost();
	const sql = `INSERT INTO posts (id, name, text, for, course, visible, date_created) VALUES (?, ?, ?, ?, ?, ?, ?)`;

	return new Promise((resolve, reject) => {
		const today = new Date();
		const formattedDate = [
			String(today.getDate()).padStart(2, '0'),
			String(today.getMonth() + 1).padStart(2, '0'),
			today.getFullYear()
		].join('.');

		db.run(sql, [userId, name, text, forField, course, visible, formattedDate], function (err) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка регистрации поста"));
			}

			console.log(
				`Запись добавлена: ${userId}, ${name}, ${text}, ${forField}, ${visible}, ${course}, ${formattedDate}`
			); // Добавлено для отладки
			resolve({
				userId,
				message: "Запись успешно зарегистрирована",
			});
		});
	});
}

/**
 * // Function to display data from a table
 * @returns list: A list of dictionaries, where each dictionary represents a record from the database.
 */
async function getAllPosts() {
	const sql = `SELECT * FROM posts`;

	return new Promise((resolve, reject) => {
		db.all(sql, function (err, rows) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка вывода всех постов"));
			}
			console.log("Записи выведены");
			resolve(rows);
		});
	});
}

/**
 * // Function to display data from a table
 * @returns list: A list of dictionaries, where each dictionary represents a record from the database.
 */
async function getPostsFor(forField) {
	const sql = `SELECT * FROM posts WHERE for = ? AND visible = ?`;

	return new Promise((resolve, reject) => {
		db.all(sql, [forField, "true"], function (err, rows) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка вывода всех постов"));
			}
			console.log("Записи выведены");
			resolve(rows);
		});
	});
}
/**
 * // Function to display data from a table
 * @returns list: A list of dictionaries, where each dictionary represents a record from the database.
 */
async function getPostsForStudent(course) {
	const sql = `SELECT * FROM posts WHERE for = ? AND course = ? AND visible = ?`;

	return new Promise((resolve, reject) => {
		db.all(sql, ['student', course, 'true'], function (err, rows) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка вывода всех постов"));
			}
			console.log("Записи выведены");
			resolve(rows);
		});
	});
}

/**
 * // Function to display data from a table
 * @returns list: A list of dictionaries, where each dictionary represents a record from the database.
 */
async function getPostsForVisible(forField) {
	const sql = `SELECT * FROM posts WHERE for = ?`;

	return new Promise((resolve, reject) => {
		db.all(sql, [forField], function (err, rows) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка вывода всех постов"));
			}
			console.log("Записи выведены");
			resolve(rows);
		});
	});
}

/**
 * Function to update
 * @param {string} id
 * @param {string} name
 * @param {string} text
 * @returns Returns a promise that resolves to true if the post was successfully updated, or false if the update failed.
 */
async function updatePost(id, name, text, forField, visible, course) {
	const sql = `UPDATE posts SET name = ?, text = ?, for = ?, course = ?, visible = ?, date_created = ? WHERE id = ?`;
	const today = new Date();
	const formattedDate = [
		String(today.getDate()).padStart(2, '0'),
		String(today.getMonth() + 1).padStart(2, '0'),
		today.getFullYear()
	].join('.');
	return new Promise((resolve, reject) => {
		db.run(sql, [name, text, forField, course, visible, formattedDate, id], function (err) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка обновления поста"));
			}
			console.log("Пост обновлен");
			resolve("OK");
		});
	});
}

/**
 * Deletes a post from the database.
 * @param {string} id
 * @returns bool: True if the post was successfully deleted, False otherwise.
 */
async function deletePost(id) {
	const sql = "DELETE FROM posts WHERE id = ?";

	return new Promise((resolve, reject) => {
		db.run(sql, [id], (err) => {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				reject(new Error("Ошибка удаление поста с id: ", id));
			} else {
				console.log(`Пост с id ${id} удален`);
				resolve("OK");
			}
		});
	});
}

/**
 * Exporting functions and a database object
 */
module.exports = {
	createPost,
	generateUniqueIdForPost: generateUniqueIdForPost,
	generateUniqueIdForUser: generateUniqueIdForUser,
	getAllPosts,
	getPostsFor,
	updatePost,
	deletePost,
	createUser,
	getAllUsers,
	updateUser,
	deleteUser,
	findUser,
	getPostsForVisible,
	db,
	getPostsForStudent,
};
