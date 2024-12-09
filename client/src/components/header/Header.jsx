import BigTitle from '../BigTitle/BigTitle';
import { EntranceComponent } from '../ExitEntranceComponent/ExitEntranceComponent';
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <BigTitle>
                Добро пожаловать в базу знаний!
            </BigTitle>
            <EntranceComponent />
        </header>
    )
}

export default Header;