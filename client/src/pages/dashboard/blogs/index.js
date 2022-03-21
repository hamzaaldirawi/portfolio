import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../../../layouts/notFound';
import { SectionName } from '../../../components/sectionName';

import ShowBlogs from './showBlogs';
import AddBlog from './addBlog';
import UpdateBlog from './updateBlog';
import UploadImages from './uploadImages';

const Blogs = () => (
    <Fragment>
        <SectionName>Blogs</SectionName>
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<ShowBlogs />} />
            <Route path='/add' element={<AddBlog />} />
            <Route path='/add/upload' element={<UploadImages />} />
            <Route path='/:id' element={<UpdateBlog />} />
        </Routes>
    </Fragment>
)

export default Blogs;