import IndexPage from "./pages/indexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/404";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/index" element={<IndexPage />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin/a" element={<AdminPage />} />
				<Route path="*" element={<IndexPage />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
