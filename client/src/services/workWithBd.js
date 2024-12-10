/**
 *  Retrieves all records from the database.
 * @returns list: A list of dictionaries, where each dictionary represents a record from the database.
 */
export async function getPosts() {
	try {
		const response = await fetch("/api/posts");
		const data = await response.json();

		if (!response.ok) {
			throw new Error(
				data.message || "Не удалось получить список постов"
			);
		}

		console.log("Список постов получен:", data.posts);
		return data.posts;
	} catch (error) {
		console.error("Ошибка при получении списка постов:", error);
	}
}
/**
 *  Retrieves all records from the database.
 * @returns list: A list of dictionaries, where each dictionary represents a record from the database.
 */
export async function getPostFor(forField) {
	try {
        const res = await fetch("/api/postsFor", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				forField: forField,
			}),
		});
		const data = await res.json();

		if (!res.ok) {
			throw new Error(
				data.message || "Не удалось получить список постов"
			);
		}

		console.log("Список постов получен:", data.posts);
		return data.posts;
	} catch (error) {
		console.error("Ошибка при получении списка постов:", error);
	}
}

/**
 * Updates the content of an existing post in the database.
 * @param {string} postId
 * @param {string} updateName
 * @param {string} updateText
 * @returns Returns a promise that resolves to true if the post was successfully updated, or false if the update failed.
 */
export const updatePost = async (postId, updateName, updateText, updateForFieled) => {
	try {
		const res = await fetch(`/api/update/${postId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: postId,
				name: updateName,
				text: updateText,
                forField: updateForFieled,
			}),
		});
		const data = await res.json();
		if (!res.ok) throw new Error(data.message || "put error");
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};

/**
 *  Adds a new post to the database.
 * @param {string} newName
 * @param {string} newText
 */
export async function addPost(newName, newText, forField) {
	fetch("/api/add", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: newName,
			text: newText,
            forField: forField,
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(data));
}

/**
 * Deletes a post from the database.
 * @param {string} id
 * @returns  bool: True if the post was successfully deleted, False otherwise.
 */
export async function deletePost(id) {
	try {
		const response = await fetch(`/api/delete/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		if (!response.ok) throw new Error(data.message || "put error");
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

/**
 *  Retrieves all records from the database.
 * @returns list: A list of dictionaries, where each dictionary represents a record from the database.
 */
export async function getUsers() {
	try {
		const response = await fetch("/api/users");
		const data = await response.json();
		if (!response.ok) {
			throw new Error(
				data.message || "Не удалось получить список пользователей"
			);
		}
		console.log("Список пользователей получен:", data.users);
		return data.users;
	} catch (error) {
		console.error("Ошибка при получении списка пользователей:", error);
	}
}

/**
 * Updates the content of an existing user in the database.
 * @param {string} postId
 * @param {string} updateEmail
 * @param {string} updatePassword
 * @returns Returns a promise that resolves to true if the user was successfully updated, or false if the update failed.
 */
export const updateUser = async (postId, updateEmail, updatePassword) => {
	try {
		const res = await fetch(`/api/updateUser/${postId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: postId,
				email: updateEmail,
				password: updatePassword,
			}),
		});
		const data = await res.json();
		if (!res.ok) throw new Error(data.message || "put error");
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};

/**
 *  Adds a new user to the database.
 * @param {string} newEmail
 * @param {string} newPassword
 */
export async function addUser(newEmail, newPassword) {
	fetch("/api/addUser", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: newEmail,
			password: newPassword,
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(data));
}

/**
 * Deletes a user from the database.
 * @param {string} id
 * @returns  bool: True if the user was successfully deleted, False otherwise.
 */
export async function deleteUser(id) {
	try {
		const response = await fetch(`/api/deleteUser/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		if (!response.ok) throw new Error(data.message || "put error");
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

/**
 *  Find user by email, password, api
 * @returns bool: True if the user was finded, False otherwise.
 */
export async function findUser(email, password) {
	try {
		const res = await fetch(`/api/userFind`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		const data = await res.json();
		if (!res.ok) throw new Error(data.message || "put error");
		console.log("Пользователь был найден");
		if (data.response) {
			return true;
		}
		return false;
	} catch (err) {
		return false;
	}
}
