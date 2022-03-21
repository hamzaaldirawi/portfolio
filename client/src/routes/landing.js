import { Fragment, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import NotFound from '../layouts/notFound';
// import ViewHeader from '../layouts/viewHeader';
// import ViewPage from '../pages/view/viewPage';
// import Footer from '../layouts/footer';

const NotFound = lazy(() => import('../layouts/notFound'));
const ViewHeader = lazy(() => import('../layouts/viewHeader'));
const ViewPage = lazy(() => import('../pages/view/viewPage'));
const Footer = lazy(() => import('../layouts/footer'));

const Landing = () => (
    <Fragment> 
        <ViewHeader/>
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route exact path='/' element={<ViewPage />} />
        </Routes>
        <Footer />
    </Fragment>
)  


export default Landing;