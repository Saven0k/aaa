import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PostList from "../components/postsList/PostList";

const IndexPage = () => {
	async function api() {
		fetch("/api")
			.then((response) => response.json())
			.then((data) => console.log(data));
	}
	async function req() {
		fetch("/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: "dabnjka",
				text: "d akm",
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}
	return (
		<>
			<Header />
			<PostList />
			<Footer />
		</>
	);
};

export default IndexPage;
