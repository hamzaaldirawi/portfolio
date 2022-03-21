import { useState, useEffect, Fragment } from "react";
import { connect } from 'react-redux';

import { showExp, uploadExpImg, uploadExpBImg, uploadExpGifImg, removeExpRedux } from '../../../../redux/reducers/exps/expActions';
import AddExperience from '../addExperience'
import DashButton from '../../../../components/dashButton';
import { FullWidth } from '../../../../components/fullWidth';
import {
    TextHolder,
    FormHolder,
    UploadForm,
    SelectFile
} from './styles';

import PropTypes from 'prop-types';

const UploadImages = ({
    showExp, 
    uploadExpBImg,
    uploadExpGifImg,
    uploadExpImg,
    removeExpRedux,
    experiences: {experience}}) => {
    const [images, setImages] = useState('');
    const [bImage, setBImage] = useState('');
    const [gifImage, setGifImage] = useState('');

    useEffect(() => {
        if(sessionStorage.ExperienceID) {
            showExp(sessionStorage.ExperienceID) 
        }
        return () => removeExpRedux()
    }, [showExp, removeExpRedux])

    return (
        <Fragment>
        {
            experience.length === 0 ? (
                <AddExperience />
            ) : (
            <FullWidth>
            <TextHolder>You Are Uploading Images To {experience.expHead}</TextHolder>
                <FormHolder>
                <div>Upload Images</div>
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
                        <DashButton buttonName='Upload Images' type="submit" value="Upload" onClick={e => {
                            e.preventDefault()
                            let formImages = new FormData();
                            for (let i = 0; i < images.length; i++) {
                                formImages.append('files', images[i])
                            }
                            uploadExpImg(sessionStorage.ExperienceID, formImages)
                        }}></DashButton>
                    </UploadForm>
                </FormHolder>

                <FormHolder>
                <div>Upload Background Image</div>
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
                        <DashButton buttonName='Upload Background' type="submit" value="Upload" onClick={e => {
                            e.preventDefault();
                            let formBImage = new FormData();
                            formBImage.append('file', bImage)  
                            uploadExpBImg(sessionStorage.ExperienceID, formBImage)
                        }}></DashButton>
                    </UploadForm>
                </FormHolder>

                <FormHolder>
                <div>Upload Gif Image</div>
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
                        <DashButton buttonName='Upload Gif Image' type="submit" value="Upload" onClick={e => {
                            e.preventDefault();
                            let formGImage = new FormData();
                            formGImage.append('file', gifImage)  
                            uploadExpGifImg(sessionStorage.ExperienceID, formGImage)
                        }}></DashButton>
                    </UploadForm>
                </FormHolder>
            </FullWidth>
            )
        }
        </Fragment>
    )
}

UploadImages.propTypes = {
    experiences: PropTypes.object.isRequired,
    showExp: PropTypes.func.isRequired,
    uploadExpImg: PropTypes.func.isRequired,
    uploadExpBImg: PropTypes.func.isRequired,
    uploadExpGifImg: PropTypes.func.isRequired,
    removeExpRedux: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    showExp: (id) => dispatch(showExp(id)),
    uploadExpImg: (_id, formImages) => dispatch(uploadExpImg(_id, formImages)),
    uploadExpBImg: (_id, formBImage) => dispatch(uploadExpBImg(_id, formBImage)),
    uploadExpGifImg: (_id, formGifImage) => dispatch(uploadExpGifImg(_id, formGifImage)),
    removeExpRedux: () => dispatch(removeExpRedux())
})

const mapStateToProps = state => ({
    experiences: state.experiences
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadImages);