import './hamburger.css'
function Hamburger({ onClick }) {
    return (
        <div className="hamburger" onClick={onClick}>
            <div className="hamburger-lines" id="line-one"></div>
            <div className="hamburger-lines" id="line-two"></div>
            <div className="hamburger-lines" id="line-three"></div>
        </div>
    )
}

export default Hamburger;