import React, { useState, lazy } from 'react';
import { connect } from 'react-redux';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Loading from '../../../../components/loading';
//import ShowCode from '../../../../components/showCode';

import PropTypes from 'prop-types';

import {
    Section,
    HeadingContainer,
    Head,
    SubHead,
    Holder,
    GridHolder,
    Pagination,
    PreviousButtonStyle,
    NextButtonStyle
} from './style';

const ShowCode = lazy(() => import('../../../../components/showCode'));

const ShowCodes = React.memo(({codes, theme}) => {

    let items;
    let pages;
    const maxNumberOfItems = 4;
    const [currentPage, setCurrentPage] = useState(0);
 
    if(codes) {
        items = codes;
        pages = Math.ceil(items.length / maxNumberOfItems);
    }      

    const handleBackPage = () => {
        setCurrentPage(page => page - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(page => page + 1);
    };


    const getPaginatedData = () => {
        const startIndex = currentPage;
        const endIndex = startIndex + maxNumberOfItems;
        return items.slice(startIndex, endIndex);
    };

    return (
        <Section 
            id='codes'
            display={theme.display.toString()}
            >
        <HeadingContainer>
            <Head>Codes and Open Source</Head>
            <SubHead>Web is fun.</SubHead>
        </HeadingContainer>
        <Holder>
        <GridHolder>
        {   
            codes && (
                getPaginatedData().map((code, idx) => {
                return (
                    <ShowCode 
                        key={idx} 
                        code={code}
                    />
                )
            }
            ))
        }
        </GridHolder>

        {
            items.length > maxNumberOfItems && (
                <Pagination>
                    <PreviousButtonStyle 
                        icon={faCircleChevronLeft} 
                        visible={`${currentPage === 0 ? 'false' : 'true'}`} 
                        onClick={handleBackPage} />
                    <NextButtonStyle 
                        icon={faCircleChevronRight} 
                        visible={`${currentPage === pages - 1 ? 'false' : 'true'}`} 
                        onClick={handleNextPage} />
                </Pagination>
            )
        }
    
        </Holder>
        </Section>
    )
})

ShowCodes.propTypes = {
    theme: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    theme: state.theme
})

export default connect(mapStateToProps)(ShowCodes);