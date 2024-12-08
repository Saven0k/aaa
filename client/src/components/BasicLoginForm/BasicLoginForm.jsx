import { useState } from 'react';
import { basicSchema } from '../../schemas';
import './style.css'
import { useFormik } from 'formik'
import { findUser } from '../../services/workWithBd';

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
            <label htmlFor="email">Email</label>
            <input
                className={errors.email && touched.email ? "input-error" : "input-good"}
                value={values.email}
                onChange={handleChange}
                p
                onBlur={handleBlur}
                id='email'
                type='email'
                placeholder='Enter your email'
            />
            {errors.email && touched.email && <p className='error'>{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id='password'
                type='password'
                placeholder='Enter your password'
                className={errors.password && touched.password ? "input-error" : "input-good"}
            />
            {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            <button
                type='submit'
                disabled={isSubmitting}
                onClick={(e) => {
                    const res = findUser(values.email, values.password)
                }}
            >
                ВОйти
            </button>

        </form>
    )
}

export default BasicLoginForm;