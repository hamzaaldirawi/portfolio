import { useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { register } from '../../../../redux/reducers/auth/authActions';
import { setAlert } from "../../../../redux/reducers/alert/alertActions";

import DashInputForm from '../../../../components/inputDashboard';
import DashButton from '../../../../components/dashButton';

import { FullWidth } from '../../../../components/fullWidth';

import PropTypes from 'prop-types';


const Register = ({ register, setAlert, auth: {adminRegistered} }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert("Password doesn't match", 'danger')
        } else {
            register({ name, email, password });
        }
    }
   
    if(adminRegistered) {
        navigate('/my-dash/admin/all', { replace: true })
    }
    
    return (
        <FullWidth>
            <form method="POST">
                <DashInputForm 
                    name='name'
                    labelName='Admin Name'
                    type='text'
                    value={name}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='email'
                    labelName='Admin Email'
                    type='email'
                    value={email.toLowerCase()}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='password'
                    labelName='Admin Password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='password2'
                    labelName='Confirm Password'
                    type='password'
                    value={password2}
                    onChange={handleChange}
                    required />
                <DashButton type='submit' handleClick={handleSubmit} buttonName='Register'/> 
            </form>
        </FullWidth>
    )
}

Register.propTypes = {
    auth: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    register: (formData) => dispatch(register(formData)),
    setAlert: (message, alertType) => dispatch(setAlert(message, alertType))
})

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)