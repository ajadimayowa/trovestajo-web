import PrimaryInput from "../inputs/PrimaryInput";
import PrimaryButton from '../buttons/PrimaryButton'
import './form.css'
import { Link } from "react-router-dom";
import Select from 'react-select'
function Form({ formId, formTitle }) {

    const userType = [
        { value: 'super-admin', label: 'Super Admin' },
        { value: 'admin', label: 'Admin' }
    ]

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'unset', width: '150px', border: 'unset', fontSize: '14px', outline: 'unset' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = 'green';
            return {
                ...styles,
                backgroundColor: isDisabled ? 'red' : ' blue',
                color: '#FFF',
                cursor: isDisabled ? 'not-allowed' : 'default',
            };
        }
    }


    let form_title = formTitle
    return (
        <div className='form-wrapper' id={formId}>
            <h3 style={{ fontSize: '24px', marginBottom: '100px' }}>{form_title}</h3>
            <form className="form" id="formId">

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Select options={userType} placeholder="Select User" styles={colourStyles} />
                </div>

                <div style={{ width: '100%' }}>
                    <PrimaryInput placeholder={'Enter Your Id'} />
                    <PrimaryInput placeholder={'Enter Your Password'} />
                </div>

                <Link to={'/dashboard'} style={{ display: 'flex', width: '100%', backgroundColor: 'unset', justifyContent: 'center' }}>
                    <PrimaryButton>Login</PrimaryButton>
                </Link>


            </form>

        </div>

    )
}

export default Form;