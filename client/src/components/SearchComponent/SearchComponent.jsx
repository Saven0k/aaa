import './style.css'
/**
 * React component, which create platform to work with search.
 * @param {string} searchItem 
 * @param {function} handleSearch 
 * @returns serach field.
 */
const SearchComponent = ({ searchItem, handleSearch }) => {
    return (
        <div className="inputTab">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path d="M22 20L20 22 14 16 14 14 16 14z"></path>
                <path d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z"></path>
                <path
                    d="M13.7 12.5H14.7V16H13.7z"
                    transform="rotate(-44.992 14.25 14.25)"
                ></path>
            </svg>
            <input
                value={searchItem}
                autoFocus
                type="text"
                autoComplete="off"
                placeholder="Введите что-то"
                className="input"
                maxLength={15}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
};
export default SearchComponent;