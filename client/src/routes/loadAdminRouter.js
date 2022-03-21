import { useEffect, Fragment, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAdmin } from '../redux/reducers/auth/authActions';

// import PrivateRouters from './privateRouters';
// import Alert from '../layouts/Alert';

import PropTypes from 'prop-types';

const PrivateRouters = lazy(() => import('./privateRouters'));
const Alert = lazy(() => import('../layouts/Alert'));

const LoadAdminRouter = ({ loadAdmin, auth: {adminDeleted} }) => {
    useEffect(() => {
        loadAdmin()
    }, [loadAdmin, adminDeleted])

    return (
        <Fragment>  
            <Alert />
            <Routes>
                <Route exact path='/*' element={<PrivateRouters />} />
            </Routes>
        </Fragment>    
    )
}

LoadAdminRouter.propTypes = {
    auth: PropTypes.object.isRequired,
    loadAdmin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    loadAdmin: () => dispatch(loadAdmin())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadAdminRouter);