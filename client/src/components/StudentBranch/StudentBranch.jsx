import './style.css'
import PostList from '../postsList/PostList'
import Header from "../header/Header";
import BigTitle from '../CustomTitles/BigTitle/BigTitle';
import MediumTitle from '../CustomTitles/MediumTitle/MediumTitle';

/**
 * React component, which create platform with post list for students.
 * @returns brach with students post
 */
const StudentBranch = () => {
    return (
        <div className='student_branch'>
            <Header />
            <div className="title-hello">
                <h1 className='h1-hello'>Добро пожаловать в базу знаний!</h1>
            </div>
            <PostList type="student" />
        </div>
    );
};
export default StudentBranch;