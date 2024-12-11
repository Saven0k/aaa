import { useState } from 'react';
import './style.css'
import { useForm } from 'react-hook-form'
import AddButton from '../CustomButtons/AddButton/AddButton';
import { addPost } from '../../services/workWithBd';

const BasicLoginForm = ({thema}) => {
    const [attempts, setAttempts] = useState(5);

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

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        addPost(email, password, thema.type)
        reset()
        
    }
        return (
            <div className='basicForm'>
                <form action="" onSubmit={handleSubmit(onSubmit(getValues("email"), setAttempts, attempts))} >
                    <div className='form-element'>
                        <label>Введите {thema[0]} нового пользователя</label>
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
                                pattern: {
                                    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                                    message: "Пример: email@email.com"
                                }
                            })}
                        />
                    </div>
                    {errors.email && <p className="error">{errors.email.message || "Error"}</p>}
                    <div className='form-element'>

                        <label>Введите {thema[1]} нового пользователя</label>
                        <input
                            className='password'
                            type="text"
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
                                pattern: {
                                    value:  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
                                    message: "Подсказка: Одна заглавная, одна цифра!"
                                },
                            })}
                        />
                    </div>
                    {errors.password && <p className="error">{errors.password.message || "Error"}</p>}
                    <AddButton disabled={!isValid} text={"Войти"}/>
                    {/* <button className='button' disabled={!isValid}>Войти</button> */}
                </form>
            </div>
        )

    }

    export default BasicLoginForm;