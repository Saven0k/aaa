import { useState } from "react";
import "./style.css";

/**
 * React component, whick create platform to view  posts.
 * @param {Array<Post>} filteredPostsList 
 * @returns Posts list, with base styles
 */
const PostsListOkView = ({ filteredPostsList }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="accordion_posts">

            {filteredPostsList.map((post, index) => (

                <div className="accordion_posts-item" key={index}>
                    <button
                        className="accordion_posts-button"
                        onClick={() => handleClick(index)}
                        style={{ backgroundColor: activeIndex === index ? "#3739dd" : "green", position: activeIndex === index ? "static": "relative" }}
                    >
                        {post.name}
                    </button>
                    <div
                        className={`accordion_posts-content ${activeIndex === index ? 'open' : ''
                            }`}
                    >
                        {post.text}
                    </div>
                </div>
            ))}
        </div>
    )
};
export default PostsListOkView;