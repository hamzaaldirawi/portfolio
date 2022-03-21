import { useState } from "react";
import { connect } from 'react-redux';

import { 
    updateCodeBImg, 
    updateCodeGifImg, 
    deleteCodeBImg,
    deleteCodeGifImg
} from '../../../../redux/reducers/codes/codeActions';

import DashButton from '../../../../components/dashButton';

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
    codeBImg,
    codeGif,
    updateCodeBImg, 
    updateCodeGifImg, 
    deleteCodeBImg,
    deleteCodeGifImg,
    codes: {code}
}) => {

    const [bImage, setBImage] = useState('');
    const [gifImage, setGifImage] = useState('');
    const { _id } = code;
 


    let bImgName;
    if(codeBImg) {
        bImgName = codeBImg.split('-b/')[1];
    }

    let gifName;
    if(codeGif) {
        gifName = codeGif.split('-b/')[1];
    }

    return (
        <FullWidth>
            <FormHolder>
            <Pargraph>Code Images</Pargraph>
            <Pargraph>Upload Background Image</Pargraph>
                {
                    codeBImg && (       
                        <ImageHolder>
                            <ImageView src={`${codeBImg}`} alt='codeBImg' />
                            <DashButton 
                                style={{'writingMode':'tb-rl'}}
                                buttonName='Delete' 
                                handleClick={() => deleteCodeBImg(_id, bImgName)} />
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
                        updateCodeBImg(_id, formBImage)
                    }}></DashButton>
                </UploadForm>
            </FormHolder>

            <FormHolder>
            <Pargraph>Upload Gif Image</Pargraph>
                {
                    codeGif && (       
                        <ImageHolder>
                            <ImageView src={`${codeGif}`} alt='codeGif' />
                            <DashButton 
                                style={{'writingMode':'tb-rl'}}
                                buttonName='Delete' 
                                handleClick={() => deleteCodeGifImg(_id, gifName)} />
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
                        updateCodeGifImg(_id, formGifImage)
                    }}></DashButton>
                </UploadForm>
            </FormHolder>
        </FullWidth>
    )
}

UpdateImages.propTypes = {
    updateCodeBImg: PropTypes.func.isRequired,
    updateCodeGifImg: PropTypes.func.isRequired,
    deleteCodeGifImg: PropTypes.func.isRequired,
    deleteCodeBImg: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    codes: state.codes
})

const mapDispatchToProps = dispatch => ({
    updateCodeBImg: (_id, formBImage) => dispatch(updateCodeBImg(_id, formBImage)),
    updateCodeGifImg: (_id, formGifImage) => dispatch(updateCodeGifImg(_id, formGifImage)),
    deleteCodeBImg: (_id, fileName) => dispatch(deleteCodeBImg(_id, fileName)),
    deleteCodeGifImg: (_id, fileName) => dispatch(deleteCodeGifImg(_id, fileName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateImages);