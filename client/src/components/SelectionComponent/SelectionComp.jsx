import { Link, redirect } from "react-router-dom"
import './style.css'
import { MyProvider, useMyContext } from "../../services/MyProvider/MyProvider";

/**
 * React component, which create style for index page.
 * @returns styled page
 */
const SelectionComp = () => {
    const { contextState, updateContextState } = useMyContext();

    const handleClick1 = (type) => {
        updateContextState(type);
    };

    // const CheckRole = () => {
    //     if (localStorage.getItem("contextState") === null) {
    //         localStorage.setItem("contextState", "user")
    //         window.location.href = '/404'
    //     }
    //     else {
    //         if ((localStorage.getItem("contextState")).type === "teacher") {
    //             return (
    //                 <Link to={'/teacher'}>
    //                     Я преподаватель
    //                 </Link>
    //                  <Link to={'/curatorPage'}>
    //                         <button className="buttonGo">Я куратор</button>
    //                     </Link>
    //                     <Link to={'/parentsPage'}>
    //                         <button className="buttonGo">Я родитель</button>
    //                     </Link>
    //             )
    //         } else {
    //             return (
    //                 <>
    //                     <Link to={'/login'}>
    //                         <button className="buttonGo">Я преподаватель</button>
    //                     </Link>
    //                     <Link to={'/curatorPage'}>
    //                         <button className="buttonGo">Я куратор</button>
    //                     </Link>
    //                     <Link to={'/parentsPage'}>
    //                         <button className="buttonGo">Я родитель</button>
    //                     </Link>
    //                 </>
    //             )
    //         }
    //     }
    // }


    const CheckRole = () => {
        if (localStorage.getItem("contextState") === null) {
            localStorage.setItem("contextState", "user")
            window.location.href = '/404'
        }
        else {
            if ((localStorage.getItem("contextState")).type === "teacher") {
                return (
                    <Link to={'/teacher'}>
                        Я преподаватель / куратор
                    </Link>
                )
            } else {
                return (
                    <>
                        <Link to={'/login'}>
                            <button className="buttonGo">Я преподаватель / куратор</button>
                        </Link>
                    </>
                )
            }
        }
    }
    return (
        <MyProvider>
            <div className="selection-page">
                <Link to={'/student'}>
                    <button className="buttonGo" onClick={() => handleClick1("student")}>Я студент / родитель</button>
                </Link>
                <CheckRole />

            </div>
        </MyProvider>
    )
}
export default SelectionComp;