import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import StudentBranch from "../components/StudentBranch/StudentBranch";
import BigTitle from "../components/BigTitle/BigTitle";

const StudentLook = () => {
	if (JSON.parse(localStorage.getItem("contextState")).type === "admin") {
		return (
			<>
				<Link to={"/admin/a"}>
					<BigTitle >Вернуться обратно</BigTitle>
				</Link>
				<Header exit={false} />
				<StudentBranch />
				<Footer />
			</>
		);
	}
	window.location.href = '/index'
};

export default StudentLook;
