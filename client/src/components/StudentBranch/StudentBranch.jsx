import './style.css'
import MediumTitle from '../MediumTitle/MediumTitle'
import PostList from '../postsList/PostList'


const StudentBranch = () => {
    return (
        <div className="studentBranch">
            <MediumTitle>
                Отделы для студентов
            </MediumTitle>
            <PostList/>
        </div>
    )
}

export default StudentBranch;