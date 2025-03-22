/**
 * React component,which creates a big headline (title)
 * @param {string} children 
 * @returns react component
 */
const BigTitle = ({ children }) => {
    return (
        <h1 className='h1 center' style={{fontSize: "28px"}}>
            {children}
        </h1>
    )
}
export default BigTitle;