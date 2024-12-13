import "./style.css";

/**
 * React component, whick create platform to view  posts.
 * @param {Array<Post>} filteredPostsList 
 * @returns Posts list, with base styles
 */
const PostsListOkView = ({ filteredPostsList }) => {
    return filteredPostsList.map((post, index) => (
        <details
            className="datails"
            key={index}
            style={{ backgroundColor: index % 2 == 0 ? "rgb(187, 86, 86)" : "rgb(37, 60, 163)" }}
        >
            <summary className="summary">{post.name}</summary>
            <div className="details-info">
                <p>{post.text}</p>
            </div>
        </details>
    ))
};
export default PostsListOkView;