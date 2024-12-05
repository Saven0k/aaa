import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useEffect, useState } from "react";
import { SearchPost } from "../../services/actions";

const PostList = () => {
	// const posts = useSelector((state) => state.posts);

	const [postsList, setPostsLists] = useState([]);
	const [filteredPostsList, setFilteredPostsLists] = useState([]);
	const [searchItem, setSearchItem] = useState("");

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
			setPostsLists(data.posts);
			return data.posts;
		} catch (error) {
			console.error("Ошибка при получении списка постов:", error);
		}
	}

	const filter = (text, posts) => {
		if (!text) {
			return posts;
		}
		const regex = new RegExp(`(^|\\s)${text}`, "iu");
		const filteredPosts = posts.filter(({ name }) => regex.test(name));
		return posts.filter(({ name }) => regex.test(name.toLowerCase()));
	};

	useEffect(() => {
		const filterPost = filter(searchItem, postsList);
		setFilteredPostsLists(filterPost);
	}, [searchItem]);
	useEffect(() => {
		getPosts();
	}, []);

	const AllOk = () => {
		return filteredPostsList.map((post, index) => (
			<div className="postKey" key={index}>
				<div className="name">{post.name}</div>
				<div className="text">{post.text}</div>
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
					onChange={(e) => setSearchItem(e.target.value)}
				/>
			</div>

			<div className="posts">{AllOk()}</div>
		</div>
	);
};

export default PostList;
