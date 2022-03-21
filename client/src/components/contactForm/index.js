import axios from 'axios';
import { useState } from "react";
import { connect } from 'react-redux';

import { setAlert } from '../../redux/reducers/alert/alertActions';

import InputForm from '../input';
import CustomButton from '../button';

import { 
    InputHolder,
    InputField,
    InputLabel
} from "./styles";

import PropTypes from 'prop-types';

const ContactForm = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userMessage: ''
    })   

    const { userName, userEmail, userMessage } = formData;


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const body = JSON.stringify({ userName, userEmail, userMessage });
    
        try {
            await axios.post('/api/contact', body, config);
            setAlert('Message Sent', 'success')
        } catch (err) { 
            const error = err.response.data.message  
            setAlert(error, 'warning')
        }
    }
    
    return (
        <div> 
            <form>
                <InputForm 
                    name='userName'
                    labelName='Name'
                    type='text'
                    value={userName}
                    onChange={handleChange}
                    required />
                <InputForm 
                    name='userEmail'
                    labelName='Email'
                    type='email'
                    value={userEmail}
                    onChange={handleChange}
                    required />
                <InputHolder>
                <InputField 
                    name='userMessage'
                    type='text'
                    value={userMessage}
                    onChange={handleChange}
                    required />
                <InputLabel>Message</InputLabel> 
                </InputHolder>
                {
                    !userName ||
                    !userEmail ||
                    !userMessage ||
                    !userEmail.includes('@') ||
                    !userEmail.includes('.') ||
                    userEmail.length < 15 ? (
                        <CustomButton handleClick={handleSubmit} role='button' buttonName='Send Message' display='none' padding='0' pointer='none' cursor='disable' />
                    ) : (
                        <CustomButton handleClick={handleSubmit} role='button' buttonName='Send Message' display='none' padding='0' />
                    )
                }
            </form>
        </div>
    )
}

ContactForm.propTypes = {
    setAlert: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    setAlert: (msg, type) => dispatch(setAlert(msg, type))
})

export default connect(null, mapDispatchToProps)(ContactForm);