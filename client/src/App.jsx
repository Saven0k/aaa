import IndexPage from "./pages/indexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/404";
import AdminPage from "./pages/AdminPage";
import InAccount from "./components/InAccount/InAccount";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/index" element={<IndexPage />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/admin/a" element={<InAccount />} />
				<Route path="/admin/*" element={<InAccount />} />
				<Route path="*" element={<IndexPage />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
