import { Fragment, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import NotFound from '../layouts/notFound';
// import PageHeader from '../layouts/pageHeader';
// import ShowExperience from '../pages/view/experience'
// import Footer from '../layouts/footer';

const NotFound = lazy(() => import('../layouts/notFound'));
const PageHeader = lazy(() => import('../layouts/pageHeader'));
const ShowExperience = lazy(() => import('../pages/view/experience'));
const Footer = lazy(() => import('../layouts/footer'));

const Page = () => (
    <Fragment>
        <PageHeader />
            <Routes>
                <Route exact path='/' element={<ShowExperience />} />
            </Routes>
        <Footer />
    </Fragment>
)  


export default Page;