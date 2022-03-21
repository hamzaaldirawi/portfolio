import { useState, useEffect, Fragment } from "react";
import { connect } from 'react-redux';

import { showBlog, uploadBlogImg, removeBlogRedux } from '../../../../redux/reducers/blogs/blogActions';
import AddBlog from '../addBlog'
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
    showBlog, 
    uploadBlogImg, 
    removeBlogRedux,
    blogs: {blog}}) => {

    const [image, setImage] = useState('');

    useEffect(() => {
        if(sessionStorage.BlogID) {
            showBlog(sessionStorage.BlogID) 
        }
        return () => removeBlogRedux()
    }, [showBlog, removeBlogRedux])

    return (
        <Fragment>
        {
            blog.length === 0 ? (
                <AddBlog />
            ) : (
            <FullWidth>
            <TextHolder>You Are Uploading Images To {blog.blogName}</TextHolder>

                <FormHolder>
                <div>Upload Image</div>
                    <UploadForm>
                        <DashButton buttonName='Select Image' onClick={e => {
                            e.preventDefault();
                            document.getElementById('uploadImg').click()
                        }
                        } />
                        <SelectFile>
                        <input id='uploadImg' type="file" name="files" onChange={e => {
                            setImage(e.target.files[0]);
                        }}></input>
                        </SelectFile>
                        <DashButton buttonName='Upload Image' type="submit" value="Upload" onClick={e => {
                            e.preventDefault();
                            let formBImage = new FormData();
                            formBImage.append('file', image)  
                            uploadBlogImg(sessionStorage.BlogID, formBImage)
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
    blogs: PropTypes.object.isRequired,
    showBlog: PropTypes.func.isRequired,
    uploadBlogImg: PropTypes.func.isRequired,
    removeBlogRedux: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    showBlog: (id) => dispatch(showBlog(id)),
    uploadBlogImg: (_id, formImages) => dispatch(uploadBlogImg(_id, formImages)),
    removeBlogRedux: () => dispatch(removeBlogRedux())
})

const mapStateToProps = state => ({
    blogs: state.blogs
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadImages);