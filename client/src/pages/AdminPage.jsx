import AdminComponent from "../components/AdminComponent/AdminComponent";
import ButtonLink from "../components/CustomButtons/ButtonLink/ButtonLink";
import BigTitle from "../components/CustomTitles/BigTitle/BigTitle";
import { ExitComponent } from "../components/ExitEntranceComponent/ExitEntranceComponent";

/**
 * React Component - Admin Page
 * @returns Admin Page
 */
const AdminPage = () => {
    if ((localStorage.getItem("contextState")) === "admin") {
        return (
            <div className="AdminPage">
                <div
                    className="headerPage"
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginTop: "55px",
                        marginBottom: "35px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}>
                    <BigTitle>Панель админа</BigTitle>
                    <ButtonLink link="/studentLook">Просмотр страницы для студентов</ButtonLink>
                    <ButtonLink link="/teacherLook">Просмотр страницы для  преподавателей</ButtonLink>
                    <ExitComponent />
                </div>
                <AdminComponent />
            </div>
        );
    };
    window.location.href = '/index';
};
export default AdminPage;