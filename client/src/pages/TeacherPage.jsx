import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import StudentBranch from "../components/StudentBranch/StudentBranch";
import TeacherBranch from "../components/TeacherBranch/TeacherBranch";
import AddPostComponent from "../components/AddPostComponent/AddPostComponent";

const TeacherPage = () => {
    if (JSON.parse(localStorage.getItem("contextState")).type === "teacher" || JSON.parse(localStorage.getItem("contextState")).type === "admin" ) {
        return (
            <div className="teacherPage">
                <Header exit={true} />
                <AddPostComponent type="student" visible="false"/>
                <TeacherBranch />
                <StudentBranch />
                <Footer />
            </div>
        )
    }
    window.location.href = '/index'
}

export default TeacherPage;