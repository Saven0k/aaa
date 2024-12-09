import { useState } from 'react';
import { basicSchema } from '../../schemas';
import './style.css'
import { useFormik } from 'formik'
import { findUser } from '../../services/workWithBd';
import TextField from '@mui/material/TextField';
import MediumTitle from '../MediumTitle/MediumTitle'

const BasicLoginForm = () => {
    const [attempts, setAttempts] = useState(2);

    const onSubmit = async (values, actions) => {
        const res = await findUser(values.email, values.password);
        if (res) {
            window.location.href = '/admin/a'
            await new Promise((resolve) => setTimeout(resolve, 1000))
            actions.resetForm();
        }
        if (attempts > 1) {
            setAttempts(attempts - 1);
            alert('Неправильный логин или пароль. Осталось попыток: ' + attempts);
        } else {
            alert('У вас закончились попытки входа');
        }
    }

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });


    return (
        <form className='form' onSubmit={handleSubmit} autoComplete='off'>
            <MediumTitle>Вход в учительскую</MediumTitle>
            {/* <label htmlFor="email">Email</label> */}
            {/* <input
                className={errors.email && touched.email ? "input-error input" : "input-good input"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id='email'
                type='email'
                placeholder='Enter your email'
            /> */}
            <TextField
                // id="standard-basic"
                label="Email"
                variant="standard"
                // className={errors.email && touched.email ? "input-error input" : "input-good input"}
                className={"input"}
                value={values.email}
                onChange={handleChange}
                // onBlur={handleBlur}
                error={errors.email ? true: false}
                type='email'
            />
            {errors.email && touched.email && <p className='error'>{errors.email}</p>}
            <TextField
                id="standard-basic"
                label="Пароль"
                variant="standard"
                value={values.password}
                onChange={handleChange}
                error={errors.password ? true: false}
                type='current-password'
                // className={errors.password && touched.password ? "input-error input" : "input-good input"}
                className={"input"}
            />
            {/* <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id='password'
                type='password'
                placeholder='Enter your password'
                className={errors.password && touched.password ? "input-error input" : "input-good input"}
            /> */}
            {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            <button
                type='submit'
                disabled={isSubmitting ? true: false}
                className='button'
                onClick={(e) => {
                    const res = findUser(values.email, values.password)
                }}
            >
                Войти
            </button>

        </form>
    )
}

export default BasicLoginForm;