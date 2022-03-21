import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteAdmin } from '../../../redux/reducers/auth/authActions';

import DashButton from '../../../components/dashButton';

import {
    AdminContainer,
    NameAndEmailHolder,
    LabelHolder,
    ButtonsHolder
} from './styles';

import PropTypes from 'prop-types';

const MyProfile = ({ deleteAdmin, auth: { admin }}) => {
    const navigate = useNavigate();
    
    return (
        <AdminContainer>
            <NameAndEmailHolder>
                <p>Name: </p>
                <LabelHolder>{admin.name}</LabelHolder>
            </NameAndEmailHolder>
            <NameAndEmailHolder>
                <p>Email: </p>
                <LabelHolder>{admin.email}</LabelHolder>
            </NameAndEmailHolder>
            <ButtonsHolder>
                <DashButton buttonName='Delete' handleClick={e => {
                    e.preventDefault();
                    deleteAdmin(admin._id)
                }}>Delete</DashButton>
                <DashButton buttonName='Update' handleClick={e => {
                    e.preventDefault();
                    navigate(`/my-dash/admin/${admin._id}`, { replace: true })
                }}>Update</DashButton>
            </ButtonsHolder>
        </AdminContainer>
       
    ) 
        
}

MyProfile.propTypes = {
    deleteAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    deleteAdmin: (id) => dispatch(deleteAdmin(id))
})

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);