import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { showBlog, updateBlog, removeBlogRedux } from '../../../../redux/reducers/blogs/blogActions';
import UpdateImages from "../updateImages";

import DashInputForm from '../../../../components/inputDashboard';
import DashButton from '../../../../components/dashButton';

import { FullWidth } from '../../../../components/fullWidth';

import { 
    InputHolder,
    InputField,
    InputLabel
} from './styles';

import PropTypes from 'prop-types';

const UpdateBlog = ({ 
    showBlog, 
    updateBlog, 
    removeBlogRedux, 
    blogs: {blog, loading} 
}) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        blogText: '',
        blogName: '',
        blogUrl: ''
    });

    useEffect(() => {
        showBlog(id);
        return () => removeBlogRedux()
    }, [showBlog, loading, id, removeBlogRedux])

    useEffect(() => {
        if(blog) {
            setFormData({
                blogText: loading || !blog.blogText ? '' : blog.blogText,
                blogName: loading || !blog.blogName ? '' : blog.blogName,
                blogUrl: loading || !blog.blogUrl ? '' : blog.blogUrl,
            });    
        }
    }, [loading, blog])

    const { blogImg } = blog;
    const { blogText, blogName, blogUrl } = formData;

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        updateBlog(id, formData);
    }

    return (
        <FullWidth>
            <form >
                <DashInputForm 
                    name='blogName'
                    labelName='Code Name'
                    type='text'
                    value={blogName}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='blogUrl'
                    labelName='Code Url'
                    type='text'
                    value={blogUrl}
                    onChange={handleChange}
                    required />
                <InputHolder>
                    <InputField 
                        name='blogText'
                        type='text'
                        value={blogText}
                        onChange={handleChange}
                        maxLength='90'
                        required />
                    <InputLabel>Blog Details</InputLabel>
                </InputHolder> 
                <DashButton handleClick={handleSubmit} type='submit' buttonName='Update Blog' />
            </form>
            <UpdateImages blogImg={blogImg} />     
        </FullWidth>
    )
}

UpdateBlog.propTypes = {
    blogs: PropTypes.object.isRequired,
    showBlog: PropTypes.func.isRequired,
    updateBlog: PropTypes.func.isRequired,
    removeBlogRedux: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    blogs: state.blogs
})

const mapDispatchToProps = dispatch => ({
    showBlog: (id) => dispatch(showBlog(id)),
    updateBlog: (id, formData) => dispatch(updateBlog(id, formData)),
    removeBlogRedux: () => dispatch(removeBlogRedux())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBlog);