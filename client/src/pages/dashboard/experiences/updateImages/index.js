import { useState, Fragment } from "react";
import { connect } from 'react-redux';

import { 
    updateExpBImg, 
    updateExpImg, 
    updateExpGifImg, 
    deleteExpImg,
    deleteExpBImg,
    deleteExpGifImg
} from '../../../../redux/reducers/exps/expActions';
import DashButton from '../../../../components/dashButton';
import { Container } from "../../../../components/paginationButton/styles";
import {
    PreviousButton, 
    NextButton, 
} from "../../../../components/paginationButton";


import {
    FullWidth,
    FormHolder,
    Pargraph,
    UploadForm,
    SelectFile,
    ImageHolder,
    ImageView
} from './styles';

import PropTypes from 'prop-types';

const UpdateImages = ({
    expImgs,
    expBImg,
    expGif,
    updateExpBImg,
    updateExpImg,
    updateExpGifImg,
    deleteExpImg,
    deleteExpBImg,
    deleteExpGifImg,
    experiences: {experience}
}) => {
    const [images, setImages] = useState('');
    const [bImage, setBImage] = useState('');
    const [gifImage, setGifImage] = useState('');
    const { _id } = experience;
 
    let items;
    let pages;
    const maxNumberOfItems = 1;
    const [currentPage, setCurrentPage] = useState(1);
 
    if(expImgs) {
        items = expImgs;
        pages = Math.ceil(items.length / maxNumberOfItems);
    }      

    let bImgName;
    if(expBImg) {
        bImgName = expBImg.split('-b/')[1];
    }

    let gifName;
    if(expGif) {
        gifName = expGif.split('-b/')[1];
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
        <FullWidth>
            <FormHolder>
            <Pargraph>Experience Images</Pargraph>
                {
                    expImgs && (
                        expImgs.length > 0 && (
                            <Fragment>
                                {
                                    getPaginatedData().map((expImg, idx) => {    
                                        let fileName = expImg.split('-b/')[1];
                                        return (
                                            <ImageHolder key={idx}>
                                                <ImageView src={`${expImg}`} alt='expImg' />
                                                <DashButton 
                                                    style={{'writingMode':'tb-rl'}}
                                                    buttonName='Delete' 
                                                    handleClick={() => deleteExpImg(_id, fileName)} />
                                            </ImageHolder>
                                        ) 
                                    })
                                }    
                                <Container>
                                    <PreviousButton visible={`${currentPage === 1 ? 'false' : 'true'}`} handleBack={handleBackPage}/>
                                    <NextButton visible={`${currentPage === pages ? 'false' : 'true'}`} handleNext={handleNextPage}/>
                                </Container>  
                            </Fragment>
                        )   
                    )
                }
                <Pargraph>Upload Images</Pargraph>
                <UploadForm>
                    <DashButton buttonName='Select Images' onClick={e => {
                        e.preventDefault();
                        document.getElementById('uploadImages').click()
                    }
                    } />
                    <SelectFile>
                        <input id='uploadImages' type="file" name="files" onChange={e => {
                            setImages(e.target.files)
                        }} multiple></input>
                    </SelectFile>
                    <DashButton buttonName='Update Images' type="submit" value="Upload" onClick={e => {
                        e.preventDefault()
                        let formImages = new FormData();
                        for (let i = 0; i < images.length; i++) {
                            formImages.append('files', images[i])
                        }
                        updateExpImg(_id, formImages)
                    }}></DashButton>
                </UploadForm>
            </FormHolder>

            <FormHolder>
            <Pargraph>Upload Background Image</Pargraph>
                {
                    expBImg && (       
                        <ImageHolder>
                            <ImageView src={`${expBImg}`} alt='expBImg' />
                            <DashButton 
                                style={{'writingMode':'tb-rl'}}
                                buttonName='Delete' 
                                handleClick={() => deleteExpBImg(_id, bImgName)} />
                        </ImageHolder>

                    )
                }
                
                <UploadForm>
                    <DashButton buttonName='Select Image' onClick={e => {
                        e.preventDefault();
                        document.getElementById('uploadBack').click()
                    }
                    } />
                    <SelectFile>
                    <input id='uploadBack' type="file" name="files" onChange={e => {
                        setBImage(e.target.files[0]);
                    }}></input>
                    </SelectFile>
                    <DashButton buttonName='Update Background' type="submit" value="Upload" onClick={e => {
                        e.preventDefault();
                        let formBImage = new FormData();
                        formBImage.append('file', bImage)  
                        updateExpBImg(_id, formBImage)
                    }}></DashButton>
                </UploadForm>
            </FormHolder>

            <FormHolder>
            <Pargraph>Upload Gif Image</Pargraph>
                {
                    expGif && (       
                        <ImageHolder>
                            <ImageView src={`${expGif}`} alt='expGif' />
                            <DashButton 
                                style={{'writingMode':'tb-rl'}}
                                buttonName='Delete' 
                                handleClick={() => deleteExpGifImg(_id, gifName)} />
                        </ImageHolder>

                    )
                }
                
                <UploadForm>
                    <DashButton buttonName='Select Image' onClick={e => {
                        e.preventDefault();
                        document.getElementById('uploadGif').click()
                    }
                    } />
                    <SelectFile>
                    <input id='uploadGif' type="file" name="files" onChange={e => {
                        setGifImage(e.target.files[0]);
                    }}></input>
                    </SelectFile>
                    <DashButton buttonName='Update Gif Image' type="submit" value="Upload" onClick={e => {
                        e.preventDefault();
                        let formGifImage = new FormData();
                        formGifImage.append('file', gifImage)  
                        updateExpGifImg(_id, formGifImage)
                    }}></DashButton>
                </UploadForm>
            </FormHolder>
        </FullWidth>
    )
}

UpdateImages.propTypes = {
    experiences: PropTypes.object.isRequired,
    updateExpImg: PropTypes.func.isRequired,
    updateExpBImg: PropTypes.func.isRequired,
    updateExpGifImg: PropTypes.func.isRequired,
    deleteExpImg: PropTypes.func.isRequired,
    deleteExpBImg: PropTypes.func.isRequired,
    deleteExpGifImg: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    experiences: state.experiences
})

const mapDispatchToProps = dispatch => ({
    updateExpImg: (_id, formImages) => dispatch(updateExpImg(_id, formImages)),
    updateExpBImg: (_id, formBImage) => dispatch(updateExpBImg(_id, formBImage)),
    updateExpGifImg: (_id, formGifImage) => dispatch(updateExpGifImg(_id, formGifImage)),
    deleteExpImg: (_id, fileName) => dispatch(deleteExpImg(_id, fileName)),
    deleteExpBImg: (_id, fileName) => dispatch(deleteExpBImg(_id, fileName)),
    deleteExpGifImg: (_id, fileName) => dispatch(deleteExpGifImg(_id, fileName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateImages);