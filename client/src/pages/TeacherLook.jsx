import { Link } from "react-router-dom";
import TeacherPage from "./TeacherPage";
import BigTitle from "../components/CustomTitles/BigTitle/BigTitle";
const TeacherLook = () => {
	if (JSON.parse(localStorage.getItem("contextState")).type === "admin") {
		return (
			<>
				<Link to={"/admin/a"}>
					<BigTitle >Вернуться обратно</BigTitle>
				</Link>
				<TeacherPage />
			</>
		);
	}
	window.location.href = '/index'
};
export default TeacherLook;
