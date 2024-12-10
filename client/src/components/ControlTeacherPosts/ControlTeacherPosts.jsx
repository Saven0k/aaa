import { useState, useEffect } from "react";
import "./style.css";
import esc from "./images/delete.svg";
import {
	addPost,
	deletePost,
	// getPosts,
	updatePost,
	getPostFor,
} from "../../services/workWithBd";
import { filterPost } from "../../services/filterFunc";
import { NothingNot } from "../PostListOk/PostListOk";
import { funcToTallInput } from "../../services/inputSizeFunc";

const ControlTeacherPosts = () => {
	// State for posts list
	const [postsList, setPostsLists] = useState([]);

	// States for new post {name, text}
	const [nameNewPost, setNameNewPost] = useState("");
	const [textNewPost, setTextNewPost] = useState("");
	const [forFieldNewPost, setForFieldNewPost] = useState("");

	// State for filtered posts list.
	const [filteredPostsList, setFilteredPostsLists] = useState([]);

	// State for search item.
	const [searchItem, setSearchItem] = useState("");

	//  State post id for active change.
	const [idActivePost, setIdActivePost] = useState(null);

	// State for editing post {name,text}
	const [newName, setNewName] = useState("");
	const [newText, setNewText] = useState("");
	const [newForField, setNewForField] = useState("");

	// Function to query data from a database.
	async function prepareData() {
		const posts = await getPostFor("teacher");
		setPostsLists(posts);
		setFilteredPostsLists(posts);
	}

	// Function for save update post.
	async function handleSavePostBtnPress(
		postID,
		newName,
		newText,
		newForField
	) {
		const res = await updatePost(postID, newName, newText, newForField);
		if (!res) return false;
		setIdActivePost(null);
		setPostsLists(
			postsList.map((post) => {
				return post.id === postID
					? { ...post, name: newName, text: newText, newForField }
					: post;
			})
		);

		setFilteredPostsLists(
			filteredPostsList.map((post) => {
				return post.id === postID
					? { ...post, name: newName, text: newText, newForField }
					: post;
			})
		);
		prepareData();
	}

	// After the page loads, return prepareData()
	useEffect(() => {
		prepareData();
	}, []);

	// Function to record the value, define and modify the filtered list.
	function handleSearch(value) {
		setSearchItem(value);
		setFilteredPostsLists(filterPost(value, postsList));
	}

	// Function for recording a new post
	const RecordingNewPost = (e) => {
		e.preventDefault();
		addPost(nameNewPost, textNewPost, forFieldNewPost);
		setNameNewPost("");
		setTextNewPost("");
		setForFieldNewPost("");
		prepareData();
	};

	// List with filtered posts, if all ok.
	const PostsListOk = () => {
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
						onKeyUp={(e) => funcToTallInput("inputText")}
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
					<select
						name="select"
						className="select"
						disabled={post.id === idActivePost ? false : true}
						style={{
							border:
								post.id === idActivePost
									? "1px solid #000"
									: "none",
							outline:
								post.id === idActivePost
									? "1px solid #000"
									: "none",
						}}
					>
						<option
							value={
								post.id === idActivePost
									? newForField
									: post.forField
							}
						>
							Для студентов
						</option>
						<option
							value={
								post.id === idActivePost
									? newForField
									: post.forField
							}
						>
							Для преподавателей
						</option>
					</select>
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
					onClick={() => {
						deletePost(post.id);
						prepareData();
					}}
				/>
			</div>
		));
	};

	return (
		<div className="account">
			<div className="newPost">
				<form
					id="form"
					action="submit"
					className="form"
					onSubmit={(e) => RecordingNewPost(e)}
				>
					<div className="subs">
						<h2>Добавление новой задачи: </h2>

						<div className="sub">
							<span>Название поста</span>
							<input
								className="input"
								value={nameNewPost}
								onChange={(e) => setNameNewPost(e.target.value)}
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
								value={textNewPost}
								onChange={(e) => setTextNewPost(e.target.value)}
								maxLength={1500}
								id="text"
								name="text"
								type="text"
								placeholder="Введите содержание"
								onKeyUp={(e) => funcToTallInput("inputLike")}
							/>
						</div>
						<div className="sub">
							<span>Для кого</span>
							<select
								name="select"
								className="select"
								onChange={(e) =>
									setForFieldNewPost(e.target.value)
								}
								defaultValue={"Выберете:"}
							>
								<option value="student">Для студентов</option>
								<option value="teacher">
									Для преподавателей
								</option>
							</select>
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
					{filteredPostsList.length != 0
						? PostsListOk()
						: NothingNot()}
				</div>
			</div>
		</div>
	);
};

export default ControlTeacherPosts;
