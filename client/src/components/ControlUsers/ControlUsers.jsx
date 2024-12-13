import { useState, useEffect } from "react";
import "./style.css";
import esc from "./images/delete.svg";
import {
	addUser,
	deleteUser,
	getUsers,
	updateUser,
} from "../../services/workWithBd";
import { filterUser } from "../../services/filterFunc";
import AddButton from "../CustomButtons/AddButton/AddButton";
import NothingNot from "../PostList/NothingNot/NothingNot";

/**
 * React component, which creates a platform for control  users.
 * @returns post board
*/
const ControlUsers = () => {
	// State for users list
	const [usersList, setUsersLists] = useState([]);

	// States for new user {email, password}
	const [emailNewUser, setEmailNewUser] = useState("");
	const [passwordNewUser, setPasswordNewUser] = useState("");

	// State for filtered users list.
	const [filteredUsersList, setFilteredUsersLists] = useState([]);

	// State for search item.
	const [searchItem, setSearchItem] = useState("");

	//  State user id for active change.
	const [idActiveuser, setIdActiveuser] = useState(null);

	// State for editing user {email,password}
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");

	// Function to query data from a database.
	async function prepareData() {
		const users = await getUsers();
		setUsersLists(users);
		setFilteredUsersLists(users);
	}

	// Function for save update user.
	async function handleSaveUserBtnPress(userId, newEmail, newPassword) {
		const res = await updateUser(userId, newEmail, newPassword);
		if (!res) return false;
		setIdActiveuser(null);
		setUsersLists(
			usersList.map((user) => {
				return user.id === userId
					? { ...user, email: newEmail, password: newPassword }
					: user;
			})
		);

		setFilteredUsersLists(
			filteredUsersList.map((user) => {
				return user.id === userId
					? { ...user, email: newEmail, password: newPassword }
					: user;
			})
		);
		prepareData();
	}

	// After the page loads, return prepareData()
	useEffect(() => {
		prepareData();
	}, []);

	// Function to record the value, define and modify the filtered list.
	function handleSearch(value) {
		setSearchItem(value);
		setFilteredUsersLists(filterUser(value, usersList));
	}

	// Function for recording a new user
	const RecordingNewUser = (e) => {
		e.preventDefault();
		addUser(emailNewUser, passwordNewUser);
		setEmailNewUser("");
		setPasswordNewUser("");
		prepareData();
	};

	// List with filtered users, if all ok.
	const UsersListOk = () => {
		return filteredUsersList.map((user, index) => (
			<div className="user" key={index}>
				<div
					className="inputs"
					style={{ gap: user.id === idActiveuser ? "10px" : "0" }}
				>
					<input
						className="input"
						value={user.id === idActiveuser ? newEmail : user.email}
						onChange={(e) => setNewEmail(e.target.value)}
						maxLength={25}
						id={user.id + 1}
						name="newEmail"
						pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
						type={user.id === idActiveuser ? "text" : "email"}
						disabled={user.id === idActiveuser ? false : true}
						style={{
							border:
								user.id === idActiveuser
									? "1px solid #000"
									: "none",
						}}
					/>
					<input
						className="input inputText"
						value={
							user.id === idActiveuser
								? newPassword
								: user.password
						}
						onChange={(e) => setNewPassword(e.target.value)}
						maxLength={25}
						id={user.id}
						required
						name="newPassword"
						pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$"
						style={{
							border:
								user.id === idActiveuser
									? "1px solid #000"
									: "none",
						}}
						type={user.id === idActiveuser ? "text" : "password"}
						disabled={user.id === idActiveuser ? false : true}
					/>
					<div className="buttons">
						<button
							className="change"
							onClick={() => {
								setIdActiveuser(user.id);
								setNewEmail(user.email);
								setNewPassword(user.password);
							}}
						>
							Редактировать
						</button>
						<button
							className="save"
							onClick={() => {
								handleSaveUserBtnPress(
									user.id,
									newEmail,
									newPassword
								);
							}}
							style={{
								display: idActiveuser != null ? "flex" : "none",
							}}
						>
							Сохранить
						</button>
					</div>
				</div>
				<img
					className="img"
					src={esc}
					onClick={() => {
						deleteUser(user.id);
						prepareData();
					}}
				/>
			</div>
		));
	};

	return (
		<div className="account">
			<div className="newuser">
				<form
					action="submit"
					className="form"
					onSubmit={(e) => RecordingNewUser(e)}
				>
					<div className="subs">
						<h2>Добавление нового пользователя: </h2>

						<div className="sub">
							<span>Email пользователя</span>
							<input
								className="input"
								value={emailNewUser}
								onChange={(e) =>
									setEmailNewUser(e.target.value)
								}
								maxLength={25}
								id="email"
								name="email"
								type="email"
								pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
								placeholder="Введите email"
							/>
						</div>
						<div className="sub">
							<span>Пароль пользователя</span>
							<input
								className="input inputLike"
								value={passwordNewUser}
								onChange={(e) =>
									setPasswordNewUser(e.target.value)
								}
								maxLength={25}
								id="password"
								name="password"
								type="text"
								placeholder="Введите пароль"
								pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$"
							/>
						</div>
					</div>
					<AddButton text="Добавить пользователя" />
				</form>
			</div>
			<div className="Main">
				<div className="inputTab">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M22 20L20 22 14 16 14 14 16 14z"></path>
						<path d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z"></path>
						<path
							d="M13.7 12.5H14.7V16H13.7z"
							transform="rotate(-44.992 14.25 14.25)"
						></path>
					</svg>
					<input
						value={searchItem}
						autoFocus
						type="text"
						autoComplete="off"
						placeholder="Введите что-то"
						className="input"
						maxLength={15}
						onChange={(e) => handleSearch(e.target.value)}
					/>
				</div>

				<div className="users">
					{filteredUsersList.length != 0 ? (
						<UsersListOk />
					) : (
						<NothingNot />
					)}
				</div>
			</div>
		</div>
	);
};

export default ControlUsers;
