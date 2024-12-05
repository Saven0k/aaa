import { useState, useEffect } from "react";
import "./style.css";
import { AddPost, DeletePost } from "../../services/actions";
import { useSelector } from "react-redux";
import esc from "./images/delete.svg";

const InAccount = () => {
	const posts = useSelector((state) => state.posts);

	const [name, setName] = useState("");
	const [text, setText] = useState("");

	const [filteredPostsList, setFilteredPostsLists] = useState([]);

	const [postsList, setPostsLists] = useState(posts);
	const [searchItem, setSearchItem] = useState("");
	const [idActivePost, setIdActivePost] = useState(null);
	const [newName, setNewName] = useState("");
	const [newText, setNewText] = useState("");

	const updatePost = async (postId, updateName, updateText) => {
		try {
			const res = fetch(`/update/${postId}`, {
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

	const filter = (text, posts) => {
		if (!text) {
			return posts;
		}
		const regex = new RegExp(`(^|\\s)${text}`, "iu");
		// const filteredPosts = posts.filter(({ name }) => regex.test(name));
		return posts.filter(({ name }) => regex.test(name.toLowerCase()));
	};

	async function add(nameA, textA) {
		fetch("/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: nameA,
				text: textA,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}

	// const getPosts = () => {
	// 	fetch('/posts')
	// 		.then((response) => response.json())
	// 		.then(data => setPostsLists(data))
	// }
	function handleSearch(value) {
		setSearchItem(value);
		setFilteredPostsLists(filter(value, postsList));
	}

	async function getPosts() {
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

	// useEffect(() => {
	// 	const filterPost = filter(searchItem, postsList);
	// 	setFilteredPostsLists(filterPost);
	// }, [searchItem]);
	async function prepareData() {
		const posts = await getPosts();
		setPostsLists(posts);
		setFilteredPostsLists(posts);
	}

	async function handleSavePostBtnPress(postID, newName, newText) {
		const res = await updatePost(postID, newName, newText);
		if (!res) return false;
		setIdActivePost(null);
		setPostsLists()
	}

	useEffect(() => {
		prepareData();
	}, []);

	const writeTo = (e) => {
		e.preventDefault();
		add(name, text);
		setName("");
		setText("");
	};
	// const funcToTallInput = (e) => {
	// 	const textarea = document.querySelector(`.${e}`);
	// 	textarea.addEventListener("keyup", (g) => {
	// 		textarea.style.height = "45px";
	// 		let scHeight = g.target.scrollHeight;
	// 		textarea.style.height = `${scHeight}px`;
	// 	});
	// };

	const AllOk = () => {
		return filteredPostsList.map((post, index) => (
			<div className="post" key={index}>
				<div
					className="inputs"
					style={{ gap: post.id === idActivePost ? "10px" : "0" }}
				>
					<input
						className="input"
						value={post.id === idActivePost ? newName : post.name}
						onChange={(e) => setNewName(e.target.value)}
						maxLength={100}
						id={post.id + 1}
						name="NewName"
						type="text"
						disabled={post.id === idActivePost ? false : true}
						style={{
							border:
								post.id === idActivePost
									? "1px solid #000"
									: "none",
						}}
					/>
					<textarea
						className="input inputText"
						value={post.id === idActivePost ? newText : post.text}
						onChange={(e) => setNewText(e.target.value)}
						maxLength={25000}
						id={post.id}
						required
						// onKeyUp={(e) => funcToTallInput(post.id)}
						name="NewText"
						style={{
							border:
								post.id === idActivePost
									? "1px solid #000"
									: "none",
						}}
						type="text"
						disabled={post.id === idActivePost ? false : true}
					/>
					<div className="buttons">
						<button
							className="change"
							onClick={() => {
								setIdActivePost(post.id);
								setNewName(post.name);
								setNewText(post.text);
							}}
						>
							Редактировать
						</button>
						<button
							className="save"
							onClick={() => {
								handleSavePostBtnPress(
									post.id,
									newName,
									newText
								);
							}}
							style={{
								display: idActivePost != null ? "flex" : "none",
							}}
						>
							Сохранить
						</button>
					</div>
				</div>
				<img
					className="img"
					src={esc}
					onClick={() => DeletePost(post.id)}
				/>
			</div>
		));
	};

	const NothingNot = () => {
		return (
			<div>
				<h1>Ничего не найдено</h1>
			</div>
		);
	};

	return (
		<div className="account">
			<div className="newPost">
				<form
					id="form"
					action="submit"
					className="form"
					onSubmit={(e) => writeTo(e)}
				>
					<div className="subs">
						<h2>Добавление новой задачи: </h2>

						<div className="sub">
							<span>Название поста</span>
							<input
								className="input"
								value={name}
								onChange={(e) => setName(e.target.value)}
								maxLength={35}
								id="name"
								name="name"
								type="text"
								placeholder="Введите название"
							/>
						</div>
						<div className="sub">
							<span>Содержание поста</span>
							<textarea
								className="input inputLike"
								value={text}
								onChange={(e) => setText(e.target.value)}
								maxLength={450}
								id="text"
								name="text"
								type="text"
								placeholder="Введите содержание"
								// onKeyUp={(e) => funcToTallInput("inputLike")}
							/>
						</div>
					</div>

					<button className="button" type="submit">
						Добавить пост
					</button>
				</form>
			</div>
			<div className="Main">
				<div className="inputTab">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M22 20L20 22 14 16 14 14 16 14z"></path>
						<path d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z"></path>
						<path
							d="M13.7 12.5H14.7V16H13.7z"
							transform="rotate(-44.992 14.25 14.25)"
						></path>
					</svg>
					<input
						value={searchItem}
						autoFocus
						type="text"
						autoComplete="off"
						placeholder="Введите что-то"
						className="input"
						maxLength={15}
						onChange={(e) => handleSearch(e.target.value)}
					/>
				</div>

				<div className="posts">
					{postsList.length != 0 ? AllOk() : NothingNot()}
				</div>
			</div>
		</div>
	);
};

export default InAccount;
