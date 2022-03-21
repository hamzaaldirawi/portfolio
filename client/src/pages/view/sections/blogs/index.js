import React, { lazy } from 'react';
import { connect } from 'react-redux';
// import ShowBlog from '../../../../components/showBlog';
import Loading from '../../../../components/loading';
import PropTypes from 'prop-types';

import {
    Section,
    HeadingContainer,
    Head,
    SubHead,
    Holder,
    GridHolder,
    ShowMore,
    ColoredAhref
} from './style';

const ShowBlog = lazy(() => import('../../../../components/showBlog'));

const ShowBlogs = React.memo(({blogs, theme}) => {

    return (
        <Section 
            id='blogs'
            display={theme.display.toString()}
            >
            <HeadingContainer>
                <Head>Blogs about Web</Head>
                <SubHead>Latest Blogs</SubHead>
            </HeadingContainer>
            <Holder>
                <GridHolder>
                {   
                    blogs && (
                        blogs.map((blog, idx) => {
                        return (
                            <ShowBlog 
                                key={idx} 
                                blog={blog}
                            />
                        )
                    }
                    ))
                }
                </GridHolder>
            </Holder>
            <ShowMore>
                <ColoredAhref href='https://coding-box.com'>Show More</ColoredAhref>
            </ShowMore>
        </Section>
    )
})

ShowBlogs.propTypes = {
    theme: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    theme: state.theme
})

export default connect(mapStateToProps)(ShowBlogs);