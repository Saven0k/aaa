import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/404";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import TeacherPage from "./pages/TeacherPage";
import ForAllPage from "./pages/ForAllPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/index" element={<ForAllPage />} />
				<Route path="/teacher" element={<TeacherPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin/a" element={<AdminPage />}/>
				<Route path="*" element={<ForAllPage />} />
				<Route path="/404" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
