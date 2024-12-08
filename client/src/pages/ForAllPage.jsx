import BigTitle from "../components/BigTitle/BigTitle";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PostList from "../components/postsList/PostList";

/**
 * Main (index) page. 
 * @returns Header,PostList,Footer components.
 */
const ForAllPage = () => {
	return (
		<>
			<Header />
			<BigTitle>
				Добро пожаловать в базу знаний!
			</BigTitle>
			<PostList />
			<Footer />
		</>
	);
};

export default ForAllPage;
