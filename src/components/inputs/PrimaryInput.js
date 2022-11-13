import React from "react"
import './primary-input.css'
function PrimaryInput({ placeholder, id }) {
    return (
        <input className="primary-input" placeholder={placeholder} id={id} />
    )
}
export default PrimaryInput