import "./style.css";


// List with filtered posts, if all ok.
export const PostsListOkView = (filteredPostsList) => {
    return filteredPostsList.map((post, index) => (
        <details 
            className="datails" 
            key={index}
            style={{backgroundColor: index % 2 == 0 ? "rgb(187, 86, 86)" : "rgb(37, 60, 163)"}}
        >
            <summary className="summary">{post.name}</summary>
            <div className="details-info">
                <p>{post.text}</p>
            </div>
        </details>
    ));
};


// export const PostsListOkView = (filteredPostsList) => {
//     return filteredPostsList.map((post, index) => (
//         <div className="postKey" key={index}>
//             <div className="name">{post.name}</div>
//             <div className="text">{post.text}</div>
//         </div>
//     ));
// };

// Post if all not ok.
export const NothingNot = () => {
    return (
        <div>
            <h1>Ничего не найдено</h1>
        </div>
    );
};