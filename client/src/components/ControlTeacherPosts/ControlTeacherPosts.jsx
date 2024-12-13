import { useState, useEffect } from "react";
import "./style.css";
import prepareData from "../../services/prepareData";
import AddPostComponent from "../AddPostComponent/AddPostComponent";
import PostsListChange from "../PostList/PostListChange/PostListChange";
import SearchComponent from "../SearchComponent/SearchComponent";
import { filterPost } from "../../services/filterFunc";
import NothingNot from '../PostList/NothingNot/NothingNot'

/**
 * React component, which creates a platform for working with teachers posts.
 * @returns post board
 */
const ControlTeacherPosts = () => {
	// State for posts list
	const [postsList, setPostsLists] = useState([]);

	// State for search item.
	const [searchItem, setSearchItem] = useState("");

	// State for filtered posts list.
	const [filteredPostsList, setFilteredPostsLists] = useState([]);

	// Function to record the value, define and modify the filtered list.
	function handleSearch(value) {
		setSearchItem(value);
		setFilteredPostsLists(filterPost(value, postsList));
	}

	// After the page loads, return prepareData()
	useEffect(() => {
		prepareData("teacher", setPostsLists, setFilteredPostsLists);
	}, []);

	return (
		<>
			<AddPostComponent setFilteredPostsLists={setFilteredPostsLists} setPostsLists={setPostsLists} type={"teacher"} />
			<SearchComponent searchItem={searchItem} handleSearch={handleSearch} />
			<div className="posts">
				{filteredPostsList.length != 0
					? <PostsListChange filteredPostsList={filteredPostsList} setFilteredPostsLists={setFilteredPostsLists} postsList={postsList} setPostsLists={setPostsLists} type="teacher" />
					: <NothingNot />}

			</div>
		</>
	);
};
export default ControlTeacherPosts;