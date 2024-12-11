import BigTitle from "../components/BigTitle/BigTitle";
import Component from "../components/Component/Component";
import ButtonLink from "../components/CustomButtons/ButtonLink/ButtonLink";

/**
 * Login page
 * @returns Login component
 */
const AdminPage = () => {
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
                <ButtonLink link="/index">Перейти на главную страницу</ButtonLink>
                <ButtonLink link="/teacher">Перейти на страницу для преподавателей</ButtonLink>
            </div>
            <Component />
        </div>
    )
}

export default AdminPage;