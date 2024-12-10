import BigTitle from '../BigTitle/BigTitle';
import { EntranceComponent, ExitComponent } from '../ExitEntranceComponent/ExitEntranceComponent';
import './style.css'

const Header = ({exit}) => {
    return (
        <header className="header">
            <BigTitle>
                Добро пожаловать в базу знаний!
            </BigTitle>
            {exit ? <ExitComponent/> : <EntranceComponent />}
        </header>
    )
}

export default Header;