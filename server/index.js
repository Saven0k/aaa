const express = require("express");
const { createPost, db, getAllPosts, updatePost, deletePost } = require("./db"); // Importing the createPost function and the db object
const app = express();

// Port used
const PORT = 5000;

/**
 * Middleware for JSON parsing
 */
app.use(express.json());


/**
 * Get posts, api
 */
app.get("/api/posts", async (req, res) => {
	try {
		const posts = await getAllPosts();
		res.json({ posts }); // Отправляем список постов в формате JSON
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});


/**
 * Add post, api
 */
app.post("/api/add", async (req, res) => {
	const { name, text } = req.body;
	try {
		const result = await createPost(name, text);
		res.json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Update post, api
 */
app.put("/api/update/:id", async (req, res) => {
	const { id, name, text } = req.body;
	try {
		await updatePost(id, name, text);
		res.json({ message: "Пост обновлен" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Remove post,  api
 */
app.delete("/api/delete/:id", async (req, res) => {
	try {
		const { id: postId } = req.params;
		await deletePost(postId);
		res.json({ message: "Post deleted successfully", status: "ok" });
	} catch (err) {
		console.error("Error deleting post: ", err);
		res.status(500).send("Error deleting post");
	}
});


/**
 * Port listener
 */
const server = app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`);
});

/**
 * Handling SIGINT to shut down the database gracefully
 */
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
