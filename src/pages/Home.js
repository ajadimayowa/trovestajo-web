import './home.css'
import logo from '../assets/images/trovest-finance-logo.png'
import Hamburger from '../components/buttons/Hamburger';
import Form from '../components/forms/Form';

function Home() {
    return (
        <div className='container'>
            <div className='section' id='left-section'>

            </div>

            <div className='section' id='right-section'>
                {/* this is the section for the the index page */}
                <div id="top-section">
                    <img width={100} src={logo} alt="trovest-logo" /> <Hamburger />
                </div>
                {/* this is the section for the form */}
                <div className='section' id='form-section'>
                    <Form formTitle={'Login'} />
                </div>

            </div>

        </div>
    )
}

export default Home;