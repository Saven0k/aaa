import "./style.css";
import { useEffect, useState } from "react";
import { filterPost } from "../../services/filterFunc";
import { getPostFor } from "../../services/workWithBd";
import PostsListOkView from '../PostList/PostsListOkView/PostsListOkView'
import NothingNot from "../PostList/NothingNot/NothingNot";
import SearchComponent from "../SearchComponent/SearchComponent";

/**
 * React conponent< whick create platform view filtered posts list.
 * @param {string} type 
 * @returns filtered post list.
 */
const PostList = ({type}) => {

	// State for posts list
	const [postsList, setPostsLists] = useState([]);

	// State for filtered posts list.
	const [filteredPostsList, setFilteredPostsLists] = useState([]);

	// State for search item.
	const [searchItem, setSearchItem] = useState("");

	// Function to query data from a database.
	async function prepareData() {
		const posts = await getPostFor(type);
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
			<SearchComponent searchItem={searchItem} handleSearch={handleSearch} />
			<div className="posts">
				{filteredPostsList != 0  ? <PostsListOkView filteredPostsList={filteredPostsList} /> :<NothingNot />}
			</div>
		</div>
	);
};
export default PostList;