import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import StudentBranch from "../components/StudentBranch/StudentBranch";

/**
 * Main (index) page. 
 * @returns Header,PostList,Footer components.
 */
const ForAllPage = () => {
	return (
		<>
			<Header />
			<StudentBranch/>
			<Footer />
		</>
	);
};

export default ForAllPage;
