import { Link } from "react-router-dom"
import entrance from './images/login.png'
import exit from './images/exit.png'
import './style.css'

export const EntranceComponent = () => {
    return (
        <div className="icoBox">
            <Link to={'/login'}>
                <img className="imgIco" src={entrance} alt="" />
            </Link>
        </div>
    )
}

export const ExitComponent = () => {
    return (
        <div className="icoBox exit">
            <Link to={'/student'}>
                <img className="imgIco" src={exit} alt="" />
            </Link>
        </div>
    )
}