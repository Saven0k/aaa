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
            text TEXT
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
	}
});


/**
 * Function to create id
 * @returns {string} ID
 */
function generateUniqueId() {
	return "post_" + Date.now();
}


/**
 * Function for creating a post
 * @param {string} name 
 * @param {string} text 
 * @returns Returns a promise that resolves to true if the post was successfully updated, or false if the update failed.
 */
async function createPost(name, text) {
	const userId = generateUniqueId();
	const sql = `INSERT INTO posts (id, name, text) VALUES (?, ?, ?)`;

	return new Promise((resolve, reject) => {
		db.run(sql, [userId, name, text], function (err) {
			if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка регистрации поста"));
			}

			console.log(`Запись добавлена: ${userId}, ${name}, ${text}`); // Добавлено для отладки
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
 * Function to update
 * @param {string} id 
 * @param {string} name 
 * @param {string} text 
 * @returns Returns a promise that resolves to true if the post was successfully updated, or false if the update failed.
 */
async function updatePost(id, name, text) {
	const sql = `UPDATE posts SET name = ?, text = ? WHERE id = ?`;

	return new Promise((resolve, reject) => {
		db.run(sql, [name, text, id], function (err) {
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
	const sql = 'DELETE FROM posts WHERE id = ?';

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
	})
}

/**
 * Exporting functions and a database object
 */
module.exports = {
	createPost,
	generateUniqueId,
	getAllPosts,
	updatePost,
	deletePost,
	db,
};
