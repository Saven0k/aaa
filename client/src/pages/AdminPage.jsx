import BigTitle from "../components/BigTitle/BigTitle";
import Component from "../components/Component/Component";


/**
 * Login page
 * @returns Login component
 */
const AdminPage = () => {
    return (
        <div className="AdminPage">
            <BigTitle>Добро пожаловать в панель админа</BigTitle>
            <Component />
        </div>
    )
}

export default AdminPage;