import { useState } from "react";
import ControlStudentPosts from "../ControlPosts/ControlPosts";
import ControlTeacherPosts from "../ControlTeacherPosts/ControlTeacherPosts";
import ControlUsers from "../ControlUsers/ControlUsers";
import Header from "../header/Header";
import "./style.css";

const Component = () => {
	const [x, setX] = useState(false);
	return (
		<div className="workBlock">
			<details
				name="work"
				className="details"
				open={x}
				onClick={() => {
					setX(!x);
				}}
			>
				<summary className="summary">Работа с пользователями</summary>
				{x && <ControlUsers />}
			</details>
			<details name="work" className="details">
				<summary className="summary">
					Работа с постами студентов
				</summary>
				<ControlStudentPosts />
			</details>
			<details name="work" className="details">
				<summary className="summary">Работа с постами преподов</summary>
				<ControlTeacherPosts />
			</details>
			<details name="work" className="details">
				<summary className="summary">Статистика</summary>
			</details>
		</div>
	);
};

export default Component;
