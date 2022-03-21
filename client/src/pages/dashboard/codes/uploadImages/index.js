import { useState, useEffect, Fragment } from "react";
import { connect } from 'react-redux';

import { showCode, uploadCodeBImg, uploadCodeGif, removeCodeRedux } from '../../../../redux/reducers/codes/codeActions';
import AddCode from '../addCode'
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
    showCode, 
    uploadCodeBImg, 
    uploadCodeGif, 
    removeCodeRedux,
    codes: {code}}) => {

    const [bImage, setBImage] = useState('');
    const [gifImage, setGifImage] = useState('');

    useEffect(() => {
        if(sessionStorage.CodeID) {
            showCode(sessionStorage.CodeID) 
        }
        return () => removeCodeRedux()
    }, [showCode, removeCodeRedux])

    return (
        <Fragment>
        {
            code.length === 0 ? (
                <AddCode />
            ) : (
            <FullWidth>
            <TextHolder>You Are Uploading Images To {code.codeName}</TextHolder>

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
                            uploadCodeBImg(sessionStorage.CodeID, formBImage)
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
                            uploadCodeGif(sessionStorage.CodeID, formGImage)
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
    codes: PropTypes.object.isRequired,
    showCode: PropTypes.func.isRequired,
    uploadCodeImg: PropTypes.func.isRequired,
    uploadCodeGif: PropTypes.func.isRequired,
    removeCodeRedux: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    showCode: (id) => dispatch(showCode(id)),
    uploadCodeBImg: (_id, formImages) => dispatch(uploadCodeBImg(_id, formImages)),
    uploadCodeGif: (_id, formBImage) => dispatch(uploadCodeGif(_id, formBImage)),
    removeCodeRedux: () => dispatch(removeCodeRedux())
})

const mapStateToProps = state => ({
    codes: state.codes
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadImages);