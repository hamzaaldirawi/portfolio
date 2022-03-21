import { Fragment, useState } from "react";
import { connect } from 'react-redux';

import { addBlog } from '../../../../redux/reducers/blogs/blogActions';
import UploadImages from "../uploadImages";

import InputForm from '../../../../components/input';
import DashButton from '../../../../components/dashButton';

import { FullWidth } from '../../../../components/fullWidth';

import { 
    InputHolder,
    InputField,
    InputLabel
} from './styles';

import PropTypes from 'prop-types';

const AddBlog = ({ addBlog, blogs: {blog} }) => {
    const [formData, setFormData] = useState({
        blogName: '',
        blogText: '',
        blogUrl: ''
    })   

    const { blogName, blogText, blogUrl } = formData;
    const { _id } = blog;

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        addBlog(formData);
    }

    return (
        <Fragment>
            {
                !_id ? (
                    <FullWidth>
                        <form >
                            <InputForm 
                                name='blogName'
                                labelName='Blog Name'
                                type='text'
                                value={blogName}
                                onChange={handleChange}
                                required />
                            <InputForm 
                                name='blogUrl'
                                labelName='Blog Url'
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
                            <DashButton handleClick={handleSubmit} type='submit' buttonName='Add Blog' />
                        </form>
                    </FullWidth>
                ) : (
                    <UploadImages />
                )
            }    
        </Fragment>
    )
}

AddBlog.propTypes = {
    blogs: PropTypes.object.isRequired,
    addBlog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    blogs: state.blogs
})

const mapDispatchToProps = dispatch => ({
    addBlog: (formData) => dispatch(addBlog(formData))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddBlog)