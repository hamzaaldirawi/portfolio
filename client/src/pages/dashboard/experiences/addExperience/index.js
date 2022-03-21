import { Fragment, useState } from "react";
import { connect } from 'react-redux';

import { addExp } from '../../../../redux/reducers/exps/expActions';
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

const AddExperience = ({ addExp, experiences: {experience} }) => {
    const [formData, setFormData] = useState({
        expHead: '',
        expDesc: '',
        expDetails: '',
        expRule: '',
        expSkills: '',
        expUrl: ''
    })   

    const { expHead, expDesc, expDetails, expRule, expSkills, expUrl } = formData;
    const { _id } = experience;

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        addExp(formData);
    }
    return (
        <Fragment>
            {
                !_id ? (
                    <FullWidth>
                        <form >
                            <InputForm 
                                name='expHead'
                                labelName='Experience Name'
                                type='text'
                                value={expHead}
                                onChange={handleChange}
                                required />
      
                            <InputForm 
                                name='expDesc'
                                labelName='Experience Description'
                                type='text'
                                value={expDesc}
                                onChange={handleChange}
                                required />
                            <InputForm 
                                name='expSkills'
                                labelName='Experience Skills'
                                type='text'
                                value={expSkills}
                                onChange={handleChange}
                                required />
                            <InputForm 
                                name='expRule'
                                labelName='Experience Rule'
                                type='text'
                                value={expRule}
                                onChange={handleChange}
                                required />
                            <InputForm 
                                name='expUrl'
                                labelName='Experience Url'
                                type='text'
                                value={expUrl}
                                onChange={handleChange}
                                required />
                            <InputHolder>
                                <InputField 
                                    name='expDetails'
                                    type='text'
                                    value={expDetails}
                                    onChange={handleChange}
                                    required />
                                <InputLabel>Experience Details</InputLabel>
                            </InputHolder> 
                            <DashButton handleClick={handleSubmit} type='submit' buttonName='Add Experience' />
                        </form>
                    </FullWidth>
                ) : (
                    <UploadImages />
                )
            }    
        </Fragment>
    )
}

AddExperience.propTypes = {
    experiences: PropTypes.object.isRequired,
    addExp: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    experiences: state.experiences
})

const mapDispatchToProps = dispatch => ({
    addExp: (formData) => dispatch(addExp(formData))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddExperience)