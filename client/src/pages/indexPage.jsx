import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PostList from "../components/postsList/PostList";

/**
 * Main (index) page. 
 * @returns Header,PostList,Footer components.
 */
const IndexPage = () => {
	return (
		<>
			<Header />
			<PostList />
			<Footer />
		</>
	);
};

export default IndexPage;
