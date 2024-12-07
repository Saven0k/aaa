import './button.css'

const Button = ({children}) => {
    return (
    <button className="button" type='submit'>
        {children}
    </button>
    ) 
}

export default Button;