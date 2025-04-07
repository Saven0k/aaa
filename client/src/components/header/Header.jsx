import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <Link>
                <img src="" alt="Ico" />
            </Link>
            {/* Реализовать поиск по сайту */}
            <Link className='header_link'>Преподавателям</Link>
            <Link className='header_link'>Кураторам</Link>
        </header>
    )
}

export default Header;