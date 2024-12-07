import { Form, Formik } from 'formik'
import './form.css'
import { Input } from '../input/Input'
import { initialValues, schemas } from './helper'
import Button from '../Button/Button'

export const CustomForm = ({ email, setEmail, password, setPassword }) => {
    return (    
        <Formik
            initialValues={initialValues}
            validationSchema={schemas.custom}
            onSubmit={(e) => {
                e.pre
                setEmail("")
                setPassword("")
            }}
        >
            <Form className="form">
                <h1>Вход</h1>
                <Input
                    label="Email"
                    name="email"
                    id="email"
                    placeholder="Введите email"
                    type="email"
                    value={email}
                    func={setEmail}
                />
                <Input
                    label="Пароль"
                    name="password"
                    id="password"
                    placeholder="Введите пароль"
                    type="password"
                    value={password}
                    func={setPassword}
                />
                <Button>
                    Войти
                </Button>
            </Form>

        </Formik >
    )
}
