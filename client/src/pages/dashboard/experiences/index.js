import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../../../layouts/notFound';
import { SectionName } from '../../../components/sectionName';

import ShowExperiences from './showExperiences';
import UpdateExperience from './updateExperience/';
import AddExperience from './addExperience';
import UploadImages from './uploadImages';

const Experiences = () => (
    <Fragment>
        <SectionName>Experiences</SectionName>
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<ShowExperiences />} />
            <Route path='/add' element={<AddExperience />} />
            <Route path='/add/upload' element={<UploadImages />} />
            <Route path='/:id' element={<UpdateExperience />} />
        </Routes>
    </Fragment>  
)

export default Experiences;