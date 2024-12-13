import { useState } from "react";
import "./style.css";
import esc from "./images/delete.svg";
import { deletePost } from "../../../services/workWithBd";
import prepareData from "../../../services/prepareData";
import VisibleSwitch from "../../Switches/VisibleSwitch/VisibleSwitch";
import ChangeButton from "../../CustomButtons/ChangeButton/ChangeButton";
import SaveButton from "../../CustomButtons/SaveButton/SaveButton";
import handleSavePostBtnPress from '../../../services/handleSavePostBtnPress'

/**
 * React component, which create platform to view and change posts.
 * @param {Array<Post>} filteredPostsList 
 * @param {function} setFilteredPostsLists 
 * @param {Array<Post>} postsList 
 * @param {function} setPostsLists 
 * @param {string} type 
 * @returns list with posts, which we can change.
 */
const PostsListChange = ({ filteredPostsList, setFilteredPostsLists, postsList, setPostsLists, type }) => {

    // State for editing post {name,text}
    const [newName, setNewName] = useState("");
    const [newText, setNewText] = useState("");
    const [newVisible, setNewVisible] = useState("true");

    //  State post id for active change.
    const [idActivePost, setIdActivePost] = useState(null);

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
                <VisibleSwitch
                    disabled={post.id === idActivePost ? false : true}
                    visible={post.id === idActivePost ? newVisible : post.visible}
                    setVisible={setNewVisible}
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
                                type,
                                setIdActivePost,
                                setPostsLists,
                                setFilteredPostsLists,
                                postsList,
                                filteredPostsList,
                                newVisible,
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
                    prepareData("teacher", setPostsLists, setFilteredPostsLists);
                }}
            />
        </div>
    ));
};
export default PostsListChange;