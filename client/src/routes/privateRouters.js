import { Fragment, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from '../components/loading';
// import Signin from '../pages/dashboard/signin';
// import Loading from '../components/loading';
// import NotFound from '../layouts/notFound';
// import DashHeader from '../layouts/dashHeader';

// import Dashboard from '../pages/dashboard/dashboard';
// import MyProfile from '../pages/dashboard/myProfile';
// import Register from '../pages/dashboard/admins/register';
// import Admins from '../pages/dashboard/admins';
// import Experiences from '../pages/dashboard/experiences';
// import Codes from '../pages/dashboard/codes';
// import Blogs from '../pages/dashboard/blogs';

import { DashboardContainer } from './styles';

import PropTypes from 'prop-types';

const Signin = lazy(() => import('../pages/dashboard/signin'));
const NotFound = lazy(() => import('../layouts/notFound'));
const DashHeader = lazy(() => import('../layouts/dashHeader'));

const Dashboard = lazy(() => import('../pages/dashboard/dashboard'));
const MyProfile = lazy(() => import('../pages/dashboard/myProfile'));
const Register = lazy(() => import('../pages/dashboard/admins/register'));
const Admins = lazy(() => import('../pages/dashboard/admins'));
const Experiences = lazy(() => import('../pages/dashboard/experiences'));
const Codes = lazy(() => import('../pages/dashboard/codes'));
const Blogs = lazy(() => import('../pages/dashboard/blogs'));

const PrivateRouters = ({auth: {admin, loading}}) => {
    return (
        loading ? (
            <Loading />
        ) : (
            !admin? (
                <Signin />
            ) : (
                <Fragment>
                    <DashHeader />
                    <DashboardContainer>
                        <Routes>
                            <Route exact path='*' element={<NotFound />} />
                            <Route exact path='/' element={<Dashboard />} />
                            <Route exact path='/my-profile' element={<MyProfile />} />
                            <Route exact path='/experiences/*' element={<Experiences />} />
                            <Route exact path='/codes/*' element={<Codes />} />
                            <Route exact path='/blogs/*' element={<Blogs />} />
                            <Route exact path='/admin/*' element={<Admins />} />
                            {admin.name === 'Hamza Aldirawi' && (
                                <Fragment>
                                    <Route exact path='/register' element={<Register />} /> 
                                </Fragment>    
                            )}
                        </Routes>
                    </DashboardContainer>
                </Fragment>
            )  
        ) 
    )
}

PrivateRouters.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRouters);