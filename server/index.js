const express = require("express");
const { createPost, 
	db, 
	getAllPosts, 
	updatePost, 
	deletePost, 
	getAllUsers, 
	createUser, 
	updateUser, 
	deleteUser, 
	findUser, 
	getPostsFor, 
	getPostsForVisible} = require("./db"); // Importing the createPost function and the db object
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
 * Get posts FOR `item`, api
 */
app.post("/api/postsFor", async (req, res) => {
	const { forField } = req.body;
	try {
		const posts = await getPostsFor(forField);
		res.json({ posts }); // Отправляем список постов в формате JSON
	} catch (error) {
		console.log("a");
		
		res.status(500).json({ message: error.message });
	}
});

/**
 * Get posts FOR `item`, api
 */
app.post("/api/getPostsForVisible", async (req, res) => {
	const { forField } = req.body;
	try {
		const posts = await getPostsForVisible(forField);
		res.json({ posts }); // Отправляем список постов в формате JSON
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Add post, api
 */
app.post("/api/add", async (req, res) => {
	const { name, text, forField, visible } = req.body;
	try {
		const result = await createPost(name, text, forField, visible);
		res.json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Update post, api
 */
app.put("/api/update/:id", async (req, res) => {
	const { id, name, text, forField, visible } = req.body;
	try {
		await updatePost(id, name, text, forField, visible);
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
 * Get users, api
 */
app.get("/api/users", async (req, res) => {
	try {
		const users = await getAllUsers();
		res.json({ users }); // Отправляем список пользователей в формате JSON
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Add user, api
 */
app.post("/api/addUser", async (req, res) => {
	const { email, password } = req.body;
	try {
		const result = await createUser(email, password);
		res.json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Update post, api
 */
app.put("/api/updateUser/:id", async (req, res) => {
	const { id, email, password } = req.body;
	try {
		await updateUser(id, email, password);
		res.json({ message: "Пользователь обновлен" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Remove user,  api
 */
app.delete("/api/deleteUser/:id", async (req, res) => {
	try {
		const { id: userId } = req.params;
		await deleteUser(userId);
		res.json({ message: "User deleted successfully", status: "ok" });
	} catch (err) {
		console.error("Error deleting user: ", err);
		res.status(500).send("Error deleting user");
	}
});

/**
 * Find user by email, password, api
 */
app.post("/api/userFind", async (req, res) => {
	const { email, password } = req.body;
	try {
		const response = await findUser(email, password);
		res.json({ response });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

/**
 * Get data, api
 */
app.get("/api/data", async (req, res) => {
	try {
		const data = await getData();
		res.json({ data });
	} catch (error) {
		res.status(500).json({ message: error.message });
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