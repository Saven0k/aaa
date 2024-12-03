import store from "./store/store";
import IndexPage from "./pages/indexPage";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/404";
import AdminPage from "./pages/AdminPage";
import InAccount from "./components/InAccount/InAccount";
import { useEffect } from "react";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/index" element={<IndexPage />} />
					<Route path="/404" element={<ErrorPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/admin/a" element={<InAccount />} />
					<Route path="*" element={<IndexPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
