const express = require("express");
const { createPost, db, getAllPosts,updatePost } = require("./db"); // Импортируем функцию createPost  и объект db
const app = express();
const PORT = 5000;

// Middleware для парсинга JSON
app.use(express.json());

// Функция для получения всех постов
app.get('/posts', async (req, res) => {
	try {
		const posts = await getAllPosts();
		res.json({ posts }); // Отправляем список постов в формате JSON
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

//Функция для добавления записи
app.post("/add", async (req, res) => {
	const { name, text } = req.body;
	try {
		const result = await createPost(name, text);
		res.json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Функция для обновления поста
app.put('/update/:id', async (req, res) => {
	const id = req.params.id
	const {name, text } = req.body;
	try {
		await updatePost(id, name, text);
		res.json({ message: 'Пост обновлен' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

const server = app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`);
});

// Обработка SIGINT для корректного закрытия базы данных
process.on("SIGINT", () => {
	db.close((err) => {
		if (err) {
			console.error("Ошибка при закрытии базы данных:", err.message);
		} else {
			console.log("Соединение с базой данных закрыто.");
		}
		process.exit(0);
	});
});
