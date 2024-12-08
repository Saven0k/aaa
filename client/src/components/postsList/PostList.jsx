import { filterPost } from "../../services/filterFunc";
import { getPosts } from "../../services/workWithBd";
import CustomInput from "../CustomInput/CustomInput";
import { NothingNot, PostsListOkView } from "../PostListOk/PostListOk";
import "./style.css";
import { useEffect, useState } from "react";

const PostList = () => {

	// State for posts list
	const [postsList, setPostsLists] = useState([]);

	// State for filtered posts list.
	const [filteredPostsList, setFilteredPostsLists] = useState([]);

	// State for search item.
	const [searchItem, setSearchItem] = useState("");


	// Function to query data from a database.
	async function prepareData() {
		const posts = await getPosts();
		setPostsLists(posts);
		setFilteredPostsLists(posts);
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
				{/* <CustomInput 
					value={searchItem}
					type="text"
					size="Normal"
					onChange={(e) => handleSearch(e.target.value)}
					label="Поиск"
					className="input"
					name="input" /> */}
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
				{filteredPostsList.length != 0 ? PostsListOkView(filteredPostsList) : NothingNot()}
			</div>
		</div>
	);
};

export default PostList;
