import Header from "../components/header/Header";
import TeacherBranch from "../components/TeacherBranch/TeacherBranch";

const TeacherPage = () => {
    if (localStorage.getItem("contextState") === "teacher") {
        return (
            <div className="teacherPage">
                <Header />
                <TeacherBranch />
            </div>
        )
    }
    window.location.href = '/index'
}

export default TeacherPage;