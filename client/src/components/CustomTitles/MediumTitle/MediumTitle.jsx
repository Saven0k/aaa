import './style.css'

/**
 * React component,which creates a medium headline (title)
 * @param {string} children 
 * @returns react component
 */
const MediumTitle = ({ children, color }) => {
    return (
        <h2 className='h2' style={{ color: color }}>
            {children}
        </h2>
    )
}
export default MediumTitle;