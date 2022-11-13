import { } from 'react-router-dom';
import './primary-button.css'
function PrimaryButton({ children, onClick }) {
    return (

        <button className="primary-button" onClick={onClick}>
            <p style={{ color: '#fff', textAlign: 'center', }}>{children}</p>
        </button>

    )
}

export default PrimaryButton;