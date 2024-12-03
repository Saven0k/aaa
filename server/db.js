const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Путь к базе данных
const dbPath = path.join(__dirname, "db", "posts.db");

// Инициализация базы данных
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


function generateUniqueId() {
	return "post_" + Date.now();
}

// Функция для создания поста
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

async function viewTable() {
    const sql = `SELECT * FROM posts`;
    
    return new Promise((resolve, reject) => {
        db.run(sql, function(err) {
            if (err) {
				console.error("Ошибка базы данных:", err.message);
				return reject(new Error("Ошибка вывода всех постов"));
			}
            console.log("Записи выведены");
            resolve({
                message: "Пост выведен",
            })
        })
    })
}

// Экспортируем функции и объект базы данных
module.exports = {
	createPost,
	generateUniqueId,
	db, // Экспортируем объект базы данных
};
