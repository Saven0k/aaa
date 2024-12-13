import { Link } from "react-router-dom"
import './style.css'
import { MyProvider, useMyContext } from "../../services/MyProvider/MyProvider";

/**
 * React component, which create style for index page.
 * @returns styled page
 */
const SelectionComp = () => {
    const { contextState, updateContextState } = useMyContext();
    const handleClick1 = (type) => {
        updateContextState({ type: type, timestamp: Date.now() });
    };
    return (
        <MyProvider>
            <div className="selection-page">
                <Link to={'/student'}>
                    <button className="buttonGo" onClick={() => handleClick1("student")}>Я студент</button>
                </Link>

                {(JSON.parse(localStorage.getItem("contextState")).type === "teacher") ?
                    <Link to={'/teacher'}>
                        <button className="buttonGo" id="lox">Я преподаватель</button>
                    </Link>
                    :
                    <Link to={'/login'}>
                        <button className="buttonGo" id="ti">Я преподаватель</button>
                    </Link>
                }

            </div>
        </MyProvider>
    )
}
export default SelectionComp;