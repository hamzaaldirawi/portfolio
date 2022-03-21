import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showBlogs, deleteBlogs, deleteBlog } from '../../../../redux/reducers/blogs/blogActions';
import DashButton from "../../../../components/dashButton";
import { Container } from "../../../../components/paginationButton/styles";
import {
    PreviousButton, 
    NextButton, 
    PaginationButtons
} from "../../../../components/paginationButton";

import { 
    FullWidth,
    TableHeader,
    TableRow,
    TableColumn,
    ButtonsHolder
} from "./styles";

import PropTypes from 'prop-types';

const ShowBlogs = ({ showBlogs, deleteBlogs, deleteBlog, blogs: { blogs, blogDeleted }}) => {

    useEffect(() => {
        showBlogs();
    }, [showBlogs, blogDeleted])   

    const navigate = useNavigate();

    return (    
        <FullWidth>
        <ul>
            <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Has Img</TableColumn>
                <TableColumn>Update</TableColumn>
                <TableColumn>Delete</TableColumn>
            </TableHeader>

        {
            blogs && (
                blogs.map(({ _id, blogName, blogImg }) => (
                    <TableRow key={_id}>
                        <TableColumn>{blogName}</TableColumn>
                        <TableColumn>{
                            blogImg ? ('Yes') : ('No') 
                        }</TableColumn>
                        <TableColumn>
                            <DashButton small style={{'marginLeft': 0, 'justifyContent': 'start'}} buttonName='Update' handleClick={e => {
                                e.preventDefault();
                                navigate(`/my-dash/blogs/${_id}`, { replace: true })
                            }}>Update</DashButton>
                        </TableColumn>
                        <TableColumn>
                            <DashButton small style={{'marginLeft': 0, 'justifyContent': 'start'}} buttonName='X' handleClick={e => {
                                e.preventDefault();
                                if(window.confirm('Are you Sure?') === false) {
                                    return;
                                }
                                deleteBlog(_id)
                            }}>Delete</DashButton> 
                        </TableColumn>  
                    </TableRow>
                ))
            )
        }
        </ul>
    
        <ButtonsHolder>
            <DashButton buttonName='Delete All' handleClick={e => {
                e.preventDefault();
                alert("Are you sure? This Can't be undo?");
                deleteBlogs();
            }}></DashButton>
            <DashButton buttonName='Add New Blog' handleClick={e => {
                e.preventDefault();
                navigate('/my-dash/blogs/add', { replace:true })
            }}></DashButton>
        </ButtonsHolder>
        </FullWidth>
    )
}

ShowBlogs.propTypes = {
    showBlogs: PropTypes.func.isRequired,
    deleteBlogs: PropTypes.func.isRequired,
    deleteBlog: PropTypes.func.isRequired,
    blogs: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    showBlogs: () => dispatch(showBlogs()),
    deleteBlogs: () => dispatch(deleteBlogs()),
    deleteBlog: (id) => dispatch(deleteBlog(id))
})

const mapStateToProps = state => ({
    blogs: state.blogs
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowBlogs)