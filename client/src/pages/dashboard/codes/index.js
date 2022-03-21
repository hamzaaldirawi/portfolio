import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../../../layouts/notFound';
import { SectionName } from '../../../components/sectionName';

import ShowCodes from './showCodes';
import AddCode from './addCode';
import UpdateCode from './updateCode';
import UploadImages from './uploadImages';

const Codes = () => (
    <Fragment>
        <SectionName>Codes</SectionName>
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<ShowCodes />} />
            <Route path='/add' element={<AddCode />} />
            <Route path='/add/upload' element={<UploadImages />} />
            <Route path='/:id' element={<UpdateCode />} />
        </Routes>
    </Fragment>
)

export default Codes;