import './style.css'

const AddButton = ({text, disabled}) => {
    return (
        <button className="button" type="submit" disabled={disabled}>
            {text}
        </button>
    )
}

export default AddButton;