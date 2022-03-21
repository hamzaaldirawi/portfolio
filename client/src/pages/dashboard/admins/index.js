import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NotFound from '../../../layouts/notFound';

import UpdateAdmin from './update';
import ShowAdmins from './showAdmins';
import MyProfile from '../myProfile';

import PropTypes from 'prop-types';

const Admins = ({auth: {admin}}) => (
    <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<MyProfile />} />
        <Route exact path='/:id' element={<UpdateAdmin />} />
        {admin.name === 'Hamza Aldirawi' ? (
            <Route exact path='/all' element={<ShowAdmins />} />
        ): (
            <Route path='/all' element={<NotFound />} />
        )}
    </Routes>
)

Admins.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Admins);