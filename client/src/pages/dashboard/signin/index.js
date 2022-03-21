import { useState } from "react";
import { connect } from 'react-redux';

import { signin } from '../../../redux/reducers/auth/authActions';

import InputForm from '../../../components/input';
import DashButton from '../../../components/dashButton';

import { 
    SignInContainer,
    StyledContainer
} from './styles';

import PropTypes from 'prop-types';

const Signin = ({ signin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        signin({ email, password })
    }

    return (
        <SignInContainer>
            <StyledContainer>
                <form method="POST">
                    <InputForm 
                        name='email'
                        labelName='Your Email'
                        type='email'
                        value={email.toLowerCase()}
                        onChange={handleChange}
                        required />
                    <InputForm 
                        name='password'
                        labelName='Your Password'
                        type='password'
                        value={password}
                        onChange={handleChange}
                        required />
                    <DashButton style={{'padding': '0'}} type='submit' handleClick={handleSubmit} buttonName='Sign In' display='none' />
                </form>
            </StyledContainer>
        </SignInContainer>
    )
}

Signin.propTypes = {
    signin: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    signin: (formData) => dispatch(signin(formData))
})

export default connect(null, mapDispatchToProps)(Signin)