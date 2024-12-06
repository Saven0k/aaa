export const updatePost = async (postId, updateName, updateText) => {
    try {
        const res = await fetch(`/update/${postId}`, {
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


export async function getPosts() {
    try {
        const response = await fetch("/posts");
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

export async function addPost(newName, newText) {
    fetch("/add", {
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


export async function deletePost(id) {
    try {
        const response = await fetch(`/delete/${id}`, {
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