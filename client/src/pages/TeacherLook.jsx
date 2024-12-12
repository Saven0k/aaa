import { Link } from "react-router-dom";
import BigTitle from "../components/BigTitle/BigTitle";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TeacherBranch from "../components/TeacherBranch/TeacherBranch";

const TeacherLook = () => {
	if (JSON.parse(localStorage.getItem("contextState")).type === "admin") {
		return (
			<>
                <Link to={"/admin/a"}>
                    <BigTitle >Вернуться обратно</BigTitle>
                </Link>
				<Header exit={false} />
				<TeacherBranch/>
				<Footer />
			</>
		);
	}
	window.location.href = '/index'
};

export default TeacherLook;
