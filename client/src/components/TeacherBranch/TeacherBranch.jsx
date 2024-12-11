import './style.css'
import MediumTitle from '../MediumTitle/MediumTitle'
import PostList from '../postsList/PostList';

const TeacherBranch= () => {
    return (
        <div className="teacherBranch">
            <MediumTitle>
                Отделы для преподавателей
            </MediumTitle>
            <PostList type="teacher"/>
            <></>
        </div>
    )
}

export default TeacherBranch;