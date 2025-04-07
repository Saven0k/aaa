import "./style.css";

import ControlStudentPosts from "../ControlStudentPosts/ControlStudentPosts";
import ControlTeacherPosts from "../ControlTeacherPosts/ControlTeacherPosts";
import ControlUsers from "../ControlUsers/ControlUsers";
import Statistics from "../Statistics/Statistics";
import { useState } from "react";
import Header from '../header/Header'

/**
 * React component, which creates AdminComponent with some details.
 * @returns 
 */
const AdminComponent = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="admin_comp">
			<Header />
			<div className="accordion">
				<div className="accordion-item">
					<button
						className="accordion-button"
						onClick={() => handleClick(0)}
						style={{ backgroundColor: activeIndex === 0 ? "#3739dd" : "#f1f1f1", position: activeIndex === 0 ? "sticky" : "relative" }}
					>
						Работа с пользователями
					</button>
					<div
						className={`accordion-content ${activeIndex === 0 ? 'open' : ''
							}`}
					>
						<ControlUsers />
					</div>
				</div>
				<div className="accordion-item">
					<button
						className="accordion-button"
						onClick={() => handleClick(1)}
						style={{ backgroundColor: activeIndex === 1 ? "#3739dd" : "#f1f1f1", position: activeIndex === 1 ? "sticky" : "relative" }}
					>
						Работа с постами студентов
					</button>
					<div
						className={`accordion-content ${activeIndex === 1 ? 'open' : ''
							}`}
					>
						<ControlStudentPosts />
					</div>
				</div>
				<div className="accordion-item">
					<button
						className="accordion-button"
						onClick={() => handleClick(2)}
						style={{ backgroundColor: activeIndex === 2 ? "#3739dd" : "#f1f1f1", position: activeIndex === 2 ? "sticky" : "relative" }}
					>
						Работа с постами преподов
					</button>
					<div
						className={`accordion-content ${activeIndex === 2 ? 'open' : ''
							}`}
					>
						<ControlTeacherPosts />
					</div>
				</div>
				<div className="accordion-item">
					<button
						className="accordion-button"
						onClick={() => handleClick(3)}
						style={{ backgroundColor: activeIndex === 3 ? "#3739dd" : "#f1f1f1", position: activeIndex === 3 ? "sticky" : "relative" }}
					>
						Работа с постами родителей
					</button>
					<div
						className={`accordion-content ${activeIndex === 3 ? 'open' : ''
							}`}
					>
						{/* <ControlTeacherPosts /> */}
					</div>
				</div>
				<div className="accordion-item">
					<button
						className="accordion-button"
						onClick={() => handleClick(4)}
						style={{ backgroundColor: activeIndex === 4 ? "#3739dd" : "#f1f1f1", position: activeIndex === 4 ? "sticky" : "relative" }}
					>
						Статистика
					</button>
					<div
						className={`accordion-content ${activeIndex === 4 ? 'open' : ''
							}`}
					>
						<Statistics />
					</div>
				</div>
			</div>
		</div>

	);
};
export default AdminComponent;