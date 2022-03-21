import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { showExpByLink, removeExpRedux } from '../../../redux/reducers/exps/expActions';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PopUp from '../../../layouts/aboutPop';
import Loading from '../../../components/loading';
import NotFound from '../../../layouts/notFound';
import ImageDisplay from '../../../layouts/imageDisplay';
import PropTypes from 'prop-types';

import {
    Container,
    HeaderHolder,
    ExperienceNameDesc,
    ExperienceName,
    ExperienceDesc,
    ExperienceRuleLink,
    ExperienceLink,
    ExperienceDetails,
    TheProject,
    TheDetails,
    SkillsHolder,
    SkillsHeader,
    UnorderedList,
    ListItem,
    ImageHolder,
    Image,
    Pagination,
    PreviousButtonContainer,
    PreviousButtonStyle,
    NextButtonContainer,
    NextButtonStyle
} from './styles';

const ShowExperince = React.memo(({
        showExpByLink, 
        removeExpRedux, 
        theme,
        experiences: { workAt, workLink, experience, loading }}) => {
    const { slag }  = useParams();

    useEffect(() => {
        showExpByLink(slag);
        return () => {
            removeExpRedux()
        }
    }, [showExpByLink, removeExpRedux, slag]);
    const [imageDisplay, setImageDisplay] = useState(false);
    const [image, setImage] = useState('');
    const {
        expHead,
        expBImg,
        expSkills,
        expDesc,
        expDetails,
        expRule,
        expImgs,
        expUrl
    } = experience;

    let items;
    let pages;
    const maxNumberOfItems = 1;
    const [currentPage, setCurrentPage] = useState(1);
 
    if(expImgs) {
        items = expImgs;
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
        <Fragment>
        <ImageDisplay 
            display={imageDisplay.toString()} 
            image={image} 
            handleClick={e=> {
                e.preventDefault();
                setImageDisplay(false);
                setImage('')
            }
        }></ImageDisplay>
        <PopUp workAt={workAt} workLink={workLink}/>
        {
            loading ? (
                <Loading />
            ) : (
                <Fragment>
                {
                    !experience ? (
                        <NotFound />
                    ) : (
                        <Container 
                            onClick={e=> {
                                e.preventDefault()
                                if(imageDisplay) {
                                    setImageDisplay(false)
                                }
                            }} 
                            height={theme.display.toString()}>
                        <HeaderHolder image={expBImg}>
                            <ExperienceNameDesc>
                                <ExperienceName>{expHead}</ExperienceName>
                                <ExperienceDesc>{expDesc}</ExperienceDesc>
                            </ExperienceNameDesc>
                            <ExperienceRuleLink>
                                <p>{expRule}</p>
                                <ExperienceLink onClick={() => {
                                    let newExpUrl;
                                    if(expUrl.includes('https:')) {
                                        newExpUrl = expUrl
                                    } else {
                                        newExpUrl = 'https://' + expUrl
                                    }
                                    window.open(newExpUrl, '_blank')
                                }}
                                >Link to: {expHead}</ExperienceLink>
                            </ExperienceRuleLink>
                        </HeaderHolder> 
                        <ExperienceDetails>
                            <TheProject>The Project</TheProject>
                            <TheDetails>{expDetails}</TheDetails>
                        </ExperienceDetails>
                        <SkillsHolder>
                            <SkillsHeader>The Project Built with:</SkillsHeader>
                            <UnorderedList>
                                {
                                    expSkills && (
                                    expSkills.map((expSkill, idx) => (
                                        <ListItem key={idx}>{expSkill}</ListItem>
                                    ))
                                    )
                                }
                            </UnorderedList>
                        </SkillsHolder>
                        <ImageHolder>
                        
                        {
                            items && (
                                items.length > maxNumberOfItems && (
                                    <Pagination>
                                        <PreviousButtonContainer 
                                            onClick={handleBackPage}
                                            visible={`${currentPage === 1 ? 'false' : 'true'}`} 
                                        >
                                            <PreviousButtonStyle 
                                                icon={faCircleChevronLeft} 
                                            />
                                        </PreviousButtonContainer>
                                        {   
                                            expImgs && (
                                                getPaginatedData().map((expImg, idx) =>  (
                                                    <Image 
                                                        key={idx} 
                                                        src={expImg} 
                                                        alt={expHead} 
                                                        height='470' 
                                                        width='940'
                                                        onClick={e => {
                                                                e.preventDefault()
                                                                setImage(expImg)
                                                                setImageDisplay(!imageDisplay)
                                                            }
                                                        } />
                                                )
                                            ))
                                        }
                                            <NextButtonContainer  
                                                onClick={handleNextPage}
                                                visible={`${currentPage === pages ? 'false' : 'true'}`}
                                            >
                                                <NextButtonStyle 
                                                    icon={faCircleChevronRight}  
                                                />
                                            </NextButtonContainer>
                                        </Pagination>
                                    )
                                ) 
                            }
                            </ImageHolder> 
                        </Container>
                    )
                }
                </Fragment>
                )  
            }
        </Fragment>
    )
})

ShowExperince.propTypes = {
    experiences: PropTypes.object.isRequired,
    showExpByLink: PropTypes.func.isRequired,
    removeExpRedux: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    theme: state.theme,
    experiences: state.experiences
})

const mapDispatchToProps = dispatch => ({
    showExpByLink: (link) => dispatch(showExpByLink(link)),
    removeExpRedux: () => dispatch(removeExpRedux())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowExperince);