import './style.css'

/**
 * React component,which creates a big headline (title)
 * @param {string} children 
 * @returns react component
 */
const BigTitle = ({ children }) => {
    return (
        <h1 className='h1'>
            {children}
        </h1>
    )
}
export default BigTitle;