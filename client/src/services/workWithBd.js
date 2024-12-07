/**
 * Updates the content of an existing post in the database.
 * @param {string} postId 
 * @param {string} updateName 
 * @param {string} updateText 
 * @returns Returns a promise that resolves to true if the post was successfully updated, or false if the update failed.
 */
export const updatePost = async (postId, updateName, updateText) => {
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
 *  Adds a new post to the database.
 * @param {string} newName 
 * @param {string} newText 
 */
export async function addPost(newName, newText) {
    fetch("/api/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: newName,
            text: newText,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
};


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
};