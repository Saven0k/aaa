import ControlPosts from '../ControlPosts/ControlPosts';
import InAccount from '../ControlPosts/ControlPosts';
import ControlUsers from '../ControlUsers/ControlUsers';
import './style.css'

const Component = () => {
    return (
        <div className="workBlock">
            <details name='work' className='details'>
                <summary className='summary'>Работа с пользователями</summary>
                <ControlUsers />
            </details>
            <details name='work' className='details'>
                <summary className='summary'>Работа с постами</summary>
                <ControlPosts />
                </details>
            <details name='work' className='details'>
                <summary className='summary'>Статистика</summary>

            </details>
        </div>
    )
}

export default Component;