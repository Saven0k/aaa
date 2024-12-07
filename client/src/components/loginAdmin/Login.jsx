import { CustomForm } from '../form/Form';
import './style.css'
import { useEffect, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="all">
           <CustomForm email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>
        </div >
    )
}

export default Login;