import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { showAdmin, updateAdmin, deleteAdmin } from '../../../../redux/reducers/auth/authActions';
import { setAlert } from "../../../../redux/reducers/alert/alertActions";

import DashInputForm from '../../../../components/inputDashboard';
import DashButton from '../../../../components/dashButton';

import { FullWidth } from '../../../../components/fullWidth';

import { ButtonFlex } from './styles';

import PropTypes from 'prop-types';

const UpdateAdmin = ({ showAdmin, updateAdmin, deleteAdmin, setAlert, auth: { selectedAdmin, adminDeleted, loading}}) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        oldpassword: '',
        password: '',
        confirmpassword: '',
    });

    useEffect(() => {
        showAdmin(id);
    }, [showAdmin, adminDeleted, id])
    
    useEffect(() => {
        if(selectedAdmin) {
            setFormData({
                name: loading || !selectedAdmin.name? '' : selectedAdmin.name,
                email: loading || !selectedAdmin.email? '' : selectedAdmin.email,
                oldpassword: '',
                password: '',
                confirmpassword: '',
            });    
        }
    }, [loading, selectedAdmin])
    

    const { name, email, oldpassword, password, confirmpassword } = formData;

    const navigate = useNavigate();

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmpassword) {
            setAlert("Password doesn't match", 'danger')
        } else if(password === oldpassword) {
            setAlert("You're trying to use an old password", 'danger')
        } else {
            updateAdmin(id, { email, password, oldpassword });
            navigate('/my-dash/admin/', {replace: true})
        }
    }

    adminDeleted && (
        navigate('/my-dash/admin/all',{ replace: true })
    )

    return (
        <FullWidth>
            <form method="PUT">
                <DashInputForm 
                    name='name'
                    labelName='Name'
                    type='name'
                    value={name}
                    disabled
                />
                <DashInputForm 
                    name='email'
                    labelName='Email'
                    type='email'
                    value={email}
                    onChange={handleChange}
                />
                <DashInputForm 
                    name='oldpassword'
                    labelName='Old Password'
                    type='password'
                    value={oldpassword}
                    onChange={handleChange}
                />
                <DashInputForm 
                    name='password'
                    labelName='New Password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                />
                <DashInputForm 
                    name='confirmpassword'
                    labelName='Confirm Password'
                    type='password'
                    value={confirmpassword}
                    onChange={handleChange}
                />
                <ButtonFlex>
                    <DashButton buttonName='Delete' handleClick={e => {
                        e.preventDefault();
                        deleteAdmin(id);
                    }}>Delete</DashButton>
                    <DashButton type='submit' handleClick={handleSubmit} buttonName='Update'/> 
                </ButtonFlex>
            </form>
        </FullWidth>
    )
}

UpdateAdmin.propTypes = {
    showAdmin: PropTypes.func.isRequired,
    updateAdmin: PropTypes.func.isRequired,
    deleteAdmin: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    showAdmin: (id) => dispatch(showAdmin(id)),
    updateAdmin: (id, formData) => dispatch(updateAdmin(id, formData)),
    deleteAdmin: (id) => dispatch(deleteAdmin(id)),
    setAlert: (message, alertType) => dispatch(setAlert(message, alertType))
})

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAdmin)