import { useForm } from 'react-hook-form'
import { useState } from 'react';
import './style.css'
import MediumTitle from '../MediumTitle/MediumTitle';

const BasicForm = () => {
    const [attempts, setAttempts] = useState(5);
    const [viewPassword, setViewPassword] = useState(false)
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




    const onSubmit = async (data = getValues("email")) => {
        const email = data.email;
        const password = data.password;
        if (email == "admin", password == "admin") {
            console.log("hello admin")
            window.location.href = '/admin/a'
        } else {
            const res = await findUser(email, password);
            if (res) {
                console.log("hello teacher")
                window.location.href = '/teacher'
                await new Promise((resolve) => setTimeout(resolve, 1000))
                // const newLocal = actions.resetForm();
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
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className='form-element'>
                    <label>Email</label>
                    <input
                        className='email input'
                        type='text'
                        style={{ borderColor: errors.email ? '#f18181' : '#000' }}
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
                {errors.email && <p className="error">{errors.email.message || "Error"}</p>}
                <div className='form-element'>

                    <label>Пароль</label>
                    <input
                        className='password'
                        type={viewPassword ? 'text' : 'password'}
                        style={{ borderColor: errors.password ? '#f18181' : '#000' }}
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