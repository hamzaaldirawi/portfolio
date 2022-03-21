import { useState } from "react";
import { connect } from 'react-redux';

import { 
    updateBlogImg, 
    deleteBlogImg,
} from '../../../../redux/reducers/blogs/blogActions';

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
    blogImg,
    updateBlogImg, 
    deleteBlogImg,
    blogs: {blog}
}) => {

    const [image, setImage] = useState('');
    const { _id } = blog;
 
    let imgName;
    if(blogImg) {
        imgName = blogImg.split('-b/')[1];
    }

    return (
        <FullWidth>
            <FormHolder>
            <Pargraph>Blog Image</Pargraph>
            <Pargraph>Upload Image</Pargraph>
                {
                    blogImg && (       
                        <ImageHolder>
                            <ImageView src={`${blogImg}`} alt='blogImg' />
                            <DashButton 
                                style={{'writingMode':'tb-rl'}}
                                buttonName='Delete' 
                                handleClick={() => deleteBlogImg(_id, imgName)} />
                        </ImageHolder>

                    )
                }
                
                <UploadForm>
                    <DashButton buttonName='Select Image' onClick={e => {
                        e.preventDefault();
                        document.getElementById('upload').click()
                    }
                    } />
                    <SelectFile>
                    <input id='upload' type="file" name="files" onChange={e => {
                        setImage(e.target.files[0]);
                    }}></input>
                    </SelectFile>
                    <DashButton buttonName='Update Image' type="submit" value="Upload" onClick={e => {
                        e.preventDefault();
                        let formImage = new FormData();
                        formImage.append('file', image)  
                        updateBlogImg(_id, formImage)
                    }}></DashButton>
                </UploadForm>
            </FormHolder>
        </FullWidth>
    )
}

UpdateImages.propTypes = {
    updateBlogImg: PropTypes.func.isRequired,
    deleteBlogImg: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    blogs: state.blogs
})

const mapDispatchToProps = dispatch => ({
    updateBlogImg: (_id, formBImage) => dispatch(updateBlogImg(_id, formBImage)),
    deleteBlogImg: (_id, fileName) => dispatch(deleteBlogImg(_id, fileName))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateImages);