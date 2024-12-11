import { Link } from "react-router-dom"
import './style.css'

const SelectionComp = () => {

    const register = () => {

    }
    return (
        <div className="selection-page">
            <Link to={'/'}>
                <button className="buttonGo" onClick={() => { register("student") }}>Я студент</button>
            </Link>
            <Link to={'/login'}>
                <button className="buttonGo" onClick={() => { register("teacher") }}>Я преподаватель</button>
            </Link>
        </div>
    )
}

export default SelectionComp;