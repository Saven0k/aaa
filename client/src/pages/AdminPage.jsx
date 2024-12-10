import BigTitle from "../components/BigTitle/BigTitle";
import Component from "../components/Component/Component";
import Header from "../components/header/Header";


/**
 * Login page
 * @returns Login component
 */
const AdminPage = () => {
    return (
        <div className="AdminPage">
            <Header exit={true} />
            <BigTitle>Добро пожаловать в панель админа</BigTitle>
            <Component />
        </div>
    )
}

export default AdminPage;