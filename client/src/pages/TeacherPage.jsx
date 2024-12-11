import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import StudentBranch from "../components/StudentBranch/StudentBranch";
import TeacherBranch from "../components/TeacherBranch/TeacherBranch";

const TeacherPage = () => {
    return (
        <div className="teacherPage">
            <Header exit={true} />
            <TeacherBranch />
            <StudentBranch />
            <Footer />
        </div>
    )
}

export default TeacherPage;