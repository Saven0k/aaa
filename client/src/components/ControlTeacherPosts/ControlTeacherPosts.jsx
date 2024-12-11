import { useState, useEffect } from "react";
import "./style.css";
import esc from "./images/delete.svg";
import {
	addPost,
	deletePost,
	updatePost,
	getPostFor,
} from "../../services/workWithBd";
import { filterPost } from "../../services/filterFunc";
import { NothingNot } from "../PostListOk/PostListOk";
import { funcToTallInput } from "../../services/inputSizeFunc";
import SaveButton from "../CustomButtons/SaveButton/SaveButton";
import ChangeButton from "../CustomButtons/ChangeButton/ChangeButton";
import prepareData from "../../services/prepareData";
import handleSavePostBtnPress from "../../services/handleSavePostBtnPress";

const ControlTeacherPosts = () => {
	// State for posts list
	const [postsList, setPostsLists] = useState([]);

	// States for new post {name, text}
	const [nameNewPost, setNameNewPost] = useState("");
	const [textNewPost, setTextNewPost] = useState("");

	// State for filtered posts list.
	const [filteredPostsList, setFilteredPostsLists] = useState([]);

	// State for search item.
	const [searchItem, setSearchItem] = useState("");

	//  State post id for active change.
	const [idActivePost, setIdActivePost] = useState(null);

	// State for editing post {name,text}
	const [newName, setNewName] = useState("");
	const [newText, setNewText] = useState("");

	// After the page loads, return prepareData()
	useEffect(() => {
		prepareData("teacher", setPostsLists, setFilteredPostsLists);
	}, []);

	// Function to record the value, define and modify the filtered list.
	function handleSearch(value) {
		setSearchItem(value);
		setFilteredPostsLists(filterPost(value, postsList));
	}

	// Function for recording a new post
	const RecordingNewPost = (e) => {
		e.preventDefault();
		addPost(nameNewPost, textNewPost, "teacher");
		setNameNewPost("");
		setTextNewPost("");
		prepareData("teacher", setPostsLists, setFilteredPostsLists );
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
					<div className="buttons">
						<ChangeButton
							onClick={() => {
								setIdActivePost(post.id);
								setNewName(post.name);
								setNewText(post.text);
							}}
						/>
						<SaveButton
							idActivePost={idActivePost}
							onClick={() => {
								handleSavePostBtnPress(
									post.id,
									newName,
									newText,
									"teacher",
									setIdActivePost,
									setPostsLists,
									setFilteredPostsLists,
									postsList,
									filteredPostsList,
								);
							}}
						/>
					</div>
				</div>
				<img
					className="img"
					src={esc}
					onClick={() => {
						deletePost(post.id);
						prepareData("teacher", setPostsLists, setFilteredPostsLists );
					}}
				/>
			</div>
		));
	};

	return (
		<div className="account">
			<div className="newPost">
				<form 
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
								name="text"
								type="text"
								placeholder="Введите содержание"
								onKeyUp={(e) => funcToTallInput("inputLike")}
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
					{filteredPostsList.length != 0
						? PostsListOk()
						: NothingNot()}
				</div>
			</div>
		</div>
	);
};

export default ControlTeacherPosts;
