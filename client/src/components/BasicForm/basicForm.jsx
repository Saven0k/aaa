import { useForm } from 'react-hook-form'
import { useState } from 'react';
import './style.css'
import MediumTitle from '../CustomTitles/MediumTitle/MediumTitle';
import { findUser } from '../../services/workWithBd';
import { useMyContext } from '../../services/MyProvider/MyProvider';

const BasicForm = () => {
    const [attempts, setAttempts] = useState(5);
    const { contextState, updateContextState } = useMyContext();
    const [viewPassword, setViewPassword] = useState(false)

    // UseForm, use tags
    const {
        register,
        formState: {
            errors, isValid,
        },
        reset,
        handleSubmit,
        getValues,
    } = useForm({
        mode: `onChange`
    });

    /**
     * Function to submit form
     * @param {object} data 
     */
    const onSubmit = async (data = getValues("email")) => {
        const email = data.email;
        const password = data.password;
        if (email == "admin", password == "admin") {
            console.log("hello admin")
            window.location.href = '/admin/a'
            updateContextState("admin");
        } else {
            const res = await findUser(email, password);
            if (res) {
                updateContextState("teaher");
                console.log("hello teacher")
                window.location.href = '/teacher'
                await new Promise((resolve) => setTimeout(resolve, 1000))
            }
            if (attempts >= 1) {
                setAttempts(attempts - 1);
                alert('Неправильный логин или пароль. Осталось попыток: ' + attempts);
            } else {
                alert('У вас закончились попытки входа');
            }
        }
    }

    return (
        <div className='basicForm'>
            <MediumTitle color="white">Вход в учительскую</MediumTitle>
            <form 
                action=""
                onSubmit={handleSubmit(onSubmit)}>
                <div className='form-element'>
                    <label>Email</label>
                    <input
                        className='email input'
                        autoComplete='username'
                        type='text'
                        style={{ borderColor: errors.email ? "red" : "#000" }}
                        {...register('email', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Длинна должна быть больше 5"
                            },
                            maxLength: {
                                value: 25,
                                message: "Длинна не должна быть больше 25"
                            },
                        })}
                    />
                </div>
                {errors.email && <p className="error" style={{color: "red"}}>{errors.email.message || "Error"}</p>}
                <div className='form-element'>

                    <label>Пароль</label>
                    <input
                        autoComplete='current-password'
                        className='password'
                        type={viewPassword ? 'text' : 'password'}
                        style={{ borderColor: errors.password ? "red" : "#000" }}
                        {...register('password', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Длинна должна быть больше 5"
                            },
                            maxLength: {
                                value: 25,
                                message: "Длинна не должна быть больше 25"
                            },
                        })}
                    />
                </div>
                {errors.password && <p className="error">{errors.password.message || "Error"}</p>}
                <button className='button' disabled={!isValid}>Войти</button>
            </form>
        </div>
    )
}
export default BasicForm;