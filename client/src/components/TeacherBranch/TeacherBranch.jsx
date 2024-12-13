import './style.css'
import MediumTitle from '../MediumTitle/MediumTitle'
import PostList from '../postsList/PostList';

/**
 * React component, which create platform with post list for teachers.
 * @returns brach with teachers post
 */
const TeacherBranch= () => {
    return (
        <div className="teacherBranch">
            <MediumTitle>
                Отделы для преподавателей
            </MediumTitle>
            <PostList type="teacher"/>  
            <></>
        </div>
    );
};
export default TeacherBranch;