import './style.css'
import { useState } from "react";
const Login = () => {
    const [login,setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="all">
            <form className='form'>
                <h2>Вход</h2>
                <label><span>Login</span> <input 
                    type="text"
                    className="input login"
                    id="login"
                    name="login"
                    value={login}
                    placeholder='Логин'
                    maxLength={15}
                    onChange={(e) => setLogin(e.target.value)} />
                </label>
                <label><span>Password</span><input 
                    type="password"
                    className="input password"
                    id="password"
                    name="password"
                    value={password}
                    placeholder='Пароль'
                    maxLength={15}
                    onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit" className="button" >
                    Войти
                </button>
            </form>
        </div>
    )
}

export default Login;