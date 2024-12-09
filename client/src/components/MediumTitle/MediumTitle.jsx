import './style.css'
const MediumTitle = ({ children, color }) => {
    return (
        <h2 className='h2' style={{color: color}}>
            {children}
        </h2>
    )
}

export default MediumTitle;