import { useState } from "react";
import ControlStudentPosts from "../ControlStudentPosts/ControlStudentPosts";
import ControlTeacherPosts from "../ControlTeacherPosts/ControlTeacherPosts";
import ControlUsers from "../ControlUsers/ControlUsers";
import "./style.css";
import Statistics from "../Statistics/Statistics";

const Component = () => {
	return (
		<div className="workBlock">
			<details
				name="work"
				className="details"
			>
				<summary className="summary">Работа с пользователями</summary>
				<ControlUsers />
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
				<Statistics />
			</details>
		</div>
	);
};

export default Component;
