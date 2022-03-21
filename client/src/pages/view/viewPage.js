import { Fragment, useEffect, lazy } from "react";
import { connect } from 'react-redux';

import { showExps } from '../../redux/reducers/exps/expActions';
import { showCodes } from '../../redux/reducers/codes/codeActions';
import { showBlogs } from '../../redux/reducers/blogs/blogActions';

// import Background from '../../components/background';
// import ViewIntro from "../../layouts/viewIntro";
// import PopUp from '../../layouts/aboutPop';

// import ShowExperiences from './sections/experiences';
// import ShowCodes from "./sections/codes";
// import ShowBlogs from "./sections/blogs";

import { ViewContainer } from "./styles";

import PropTypes from 'prop-types';

const Background = lazy(() => import('../../components/background'));
const ViewIntro = lazy(() => import("../../layouts/viewIntro"));
const PopUp = lazy(() => import('../../layouts/aboutPop'));

const ShowExperiences = lazy(() => import('./sections/experiences'));
const ShowCodes = lazy(() => import("./sections/codes"));
const ShowBlogs = lazy(() => import("./sections/blogs"));

const ViewPage = ({ theme, showExps, showCodes, showBlogs,
    experiences: {experiences, workAt, workLink},
    codes: {codes},
    blogs: {blogs}
}) => {
    useEffect(() => {
        showExps()
    }, [showExps])

    useEffect(() => {
        showCodes()
    }, [showCodes])

    useEffect(() => {
        showBlogs()
    }, [showBlogs])

    return (
        <Fragment> 
            <ViewContainer height={theme.display.toString()}>
                <Background />
                <ViewIntro workAt={workAt} workLink={workLink} />
                <PopUp workAt={workAt} workLink={workLink}/>
            </ViewContainer>
            <ShowExperiences workAt={workAt} workLink={workLink} experiences={experiences} />
            <ShowCodes codes={codes} />
            <ShowBlogs blogs={blogs} />
        </Fragment>     
    )
}

ViewPage.propTypes = {
    theme: PropTypes.object.isRequired,
    experiences: PropTypes.object.isRequired,
    codes: PropTypes.object.isRequired,
    blogs: PropTypes.object.isRequired,
    showExps: PropTypes.func.isRequired,
    showCodes: PropTypes.func.isRequired,
    showBlogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    theme: state.theme,
    experiences: state.experiences,
    codes: state.codes,
    blogs: state.blogs
})

const mapDispatchToProps = dispatch => ({
    showExps: () => dispatch(showExps()),
    showCodes: () => dispatch(showCodes()),
    showBlogs: () => dispatch(showBlogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);