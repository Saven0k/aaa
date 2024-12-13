import './style.css'
import unvisible from './images/visible.png'
import visibitity from './images/visibility.png'

/**
 * React component, which reacte button to change visibility.
 * @returns button to change visibility for post. 
 */
const VisibleSwitch = ({ visible, setVisible, disabled }) => {
    return (
        <button
            className={visible === "true" ? `button_change_themes visible` : `button_change_themes unvisible`}
            disabled={disabled}
            style={{
                backgroundImage: visible === "true" ? `url(${visibitity})` : `url(${unvisible})`
            }}
            onClick={() => {
                setVisible(visible == "true" ? "false" : "true")
            }}
        ></button>
    );
};
export default VisibleSwitch;