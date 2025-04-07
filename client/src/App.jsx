import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/404";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";
import SelectionPage from "./pages/SelectionPage";
import { MyProvider } from "./services/MyProvider/MyProvider";
import { MyTheme } from "./services/MyThemeProvider/MyThemeProvider";
import { ParentsPage } from './pages/ParentsPage';
import { CuratorPage } from './pages/CuratorPage'
import AdminPage2 from "./pages/Test2Component";
import PostsPage from "./pages/TestComponent";

function App() {
	return (
		<MyTheme>
			<MyProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/student" element={<StudentPage />} />
						<Route path="/teacher" element={<TeacherPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/admin/a" element={<AdminPage />} />
						<Route path="/selection" element={<SelectionPage />} />
						<Route path="*" element={<SelectionPage />} />
						<Route path="/404" element={<ErrorPage />} />
						<Route path="/parentsPage" element={<ParentsPage />} />
						<Route path="/curatorPage" element={<CuratorPage />} />
						{/* <Route path="/test" element={<TestComponent />} /> */}
						<Route path="/test" element={<AdminPage2 />} />
						<Route path="/test3	" element={<PostsPage />} />
					</Routes>
				</BrowserRouter>
			</MyProvider>
		</MyTheme>

	);

}
export default App;
