import { useState, useEffect } from "react";
import "./style.css";
import { filterPost } from "../../services/filterFunc";
import prepareData from "../../services/prepareData";
import AddPostComponent from "../AddPostComponent/AddPostComponent";
import SearchComponent from "../SearchComponent/SearchComponent";
import PostsListChange from "../PostList/PostListChange/PostListChange";
import NothingNot from '../PostList/NothingNot/NothingNot'

/**
 * React component, which creates a platform for working with student posts.
 * @returns post board
 */
const ControlStudentPosts = () => {
	// State for posts list
	const [postsList, setPostsLists] = useState([]);

	// State for filtered posts list.
	const [filteredPostsList, setFilteredPostsLists] = useState([]);

	// State for search item.
	const [searchItem, setSearchItem] = useState("");

	// After the page loads, return prepareData()
	useEffect(() => {
		prepareData("student", setPostsLists, setFilteredPostsLists);
	}, []);

	// Function to record the value, define and modify the filtered list.
	function handleSearch(value) {
		setSearchItem(value);
		setFilteredPostsLists(filterPost(value, postsList));
	}

	return (
		<div className="account">
			<AddPostComponent setFilteredPostsLists={setFilteredPostsLists} setPostsLists={setPostsLists} type={"student"} visible={"true"} />
			<SearchComponent searchItem={searchItem} handleSearch={handleSearch} />
			<div className="posts center">
				{filteredPostsList.length != 0
					? <PostsListChange filteredPostsList={filteredPostsList} setFilteredPostsLists={setFilteredPostsLists} postsList={postsList} setPostsLists={setPostsLists} type="student"  />
					: <NothingNot />}
			</div>
		</div>
	);
};
export default ControlStudentPosts;