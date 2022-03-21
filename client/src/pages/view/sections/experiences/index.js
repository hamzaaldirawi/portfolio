import React, { useState, lazy } from 'react';
import { connect } from 'react-redux';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import ShowExp from '../../../../components/showExp';

import PropTypes from 'prop-types';

import {
    Section,
    HeadingContainer,
    Head,
    SubHead,
    Holder,
    Pagination,
    PreviousButtonStyle,
    NextButtonStyle
} from './style';

const ShowExp = lazy(() => import('../../../../components/showExp'));
const ShowExperiences = React.memo(({experiences, theme}) => {

    let items;
    let pages;
    const maxNumberOfItems = 2;
    const [currentPage, setCurrentPage] = useState(1);
 
    if(experiences) {
        items = experiences;
        pages = Math.ceil(items.length / maxNumberOfItems);
    }      

    const handleBackPage = () => {
        setCurrentPage(page => page - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(page => page + 1);
    };


    const getPaginatedData = () => {
        const startIndex = currentPage * maxNumberOfItems - maxNumberOfItems; 
        const endIndex = startIndex + maxNumberOfItems;
        return items.slice(startIndex, endIndex);
    };

    return (
        <Section 
            id='experiences'
            display={theme.display.toString()}
            >
        <HeadingContainer>
            <Head>Experiences</Head>
            <SubHead>Latest Works</SubHead>
        </HeadingContainer>
        <Holder>

        {   
            experiences && (
                getPaginatedData().map((experience, idx) => {
                return (
                    <ShowExp 
                        key={idx} 
                        experience={experience}
                    />
                )
            }
            ))
        }

        {
            items.length > maxNumberOfItems && (
                <Pagination>
                    <PreviousButtonStyle 
                        icon={faCircleChevronLeft} 
                        visible={`${currentPage === 1 ? 'false' : 'true'}`} 
                        onClick={handleBackPage} />
                    <NextButtonStyle 
                        icon={faCircleChevronRight} 
                        visible={`${currentPage === pages ? 'false' : 'true'}`} 
                        onClick={handleNextPage} />
                </Pagination>
            )
        }
    
        </Holder>
        </Section>
    )
})

ShowExperiences.propTypes = {
    theme: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    theme: state.theme
})

export default connect(mapStateToProps)(ShowExperiences);