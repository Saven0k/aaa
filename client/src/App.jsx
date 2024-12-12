import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/404";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import TeacherPage from "./pages/TeacherPage";
import ForAllPage from "./pages/ForAllPage";
import SelectionPage from "./pages/SelectionPage";
import { useState } from "react";
import { MyProvider } from "./services/MyProvider/MyProvider";
import TeacherLook from "./pages/TeacherLook";
import StudentLook from "./pages/StudentLook";

function App() {
	return (
		<MyProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/student" element={<ForAllPage />} />
					<Route path="/teacher" element={<TeacherPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/admin/a" element={<AdminPage />} />
					<Route path="/selection" element={<SelectionPage />} />
					<Route path="/studentLook" element={<StudentLook />} />
					<Route path="/teacherLook" element={<TeacherLook />} />
					<Route path="*" element={<SelectionPage />} />
					<Route path="/404" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</MyProvider>
	);

}
export default App;
