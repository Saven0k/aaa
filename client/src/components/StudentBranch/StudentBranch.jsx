import './style.css'
import MediumTitle from '../CustomTitles/MediumTitle/MediumTitle'
import PostList from '../postsList/PostList'

/**
 * React component, which create platform with post list for students.
 * @returns brach with students post
 */
const StudentBranch = () => {
    return (
        <div className="studentBranch">
            <MediumTitle>
                Отделы для студентов
            </MediumTitle>
            <PostList type="student"/>
        </div>
    );
};
export default StudentBranch;