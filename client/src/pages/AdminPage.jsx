import AdminComponent from "../components/AdminComponent/AdminComponent";
import ButtonLink from "../components/CustomButtons/ButtonLink/ButtonLink";
import BigTitle from "../components/CustomTitles/BigTitle/BigTitle";

/**
 * React Component - Admin Page
 * @returns Admin Page
 */
const AdminPage = () => {
    if (JSON.parse(localStorage.getItem("contextState")).type === "admin") {
        return (
            <div className="AdminPage">
                <div
                    className="headerPage"
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginTop: "15px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <BigTitle>Добро пожаловать в панель админа</BigTitle>
                    <ButtonLink link="/studentLook">Просмотр страницы для студентов</ButtonLink>
                    <ButtonLink link="/teacherLook">Просмотр страницы для  преподавателей</ButtonLink>
                </div>
                <AdminComponent />
            </div>
        );
    };
    window.location.href = '/index';
};
export default AdminPage;