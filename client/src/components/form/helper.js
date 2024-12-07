import * as Yup from 'yup';
const regx = {
    email: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$/,
    password: /^[а-яА-Яa-zA-Z]{2,20}$/,
}

const emailA = Yup.string()
    .matches(regx.email, "Формат example@mail.com")
    .required("Введите email")

const passwordA = Yup.string()
    .matches(regx.password, "Кириллица латиница от 2 до 20 символов")
    .required("Введите пароль")



export const schemas = {
    custom: Yup.object().shape({
        emailA: Yup.string().required("Required").email("Invalid email adress").matches(regx.email, "Формат example@mail.com"),
        passwordA: Yup.string().required("Required").matches(regx.password, "Кириллица латиница от 2 до 20 символов"),
    })
}


export const initialValues = {
    email: "",
    password: "",
}
