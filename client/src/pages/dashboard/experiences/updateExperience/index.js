import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { showExp, updateExp, removeExpRedux } from '../../../../redux/reducers/exps/expActions';
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

const UpdateExperience = ({ 
    showExp, 
    updateExp, 
    removeExpRedux, 
    experiences: {experience, loading} 
}) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        expHead: '',
        expHeadLink: '',
        expDesc: '',
        expDetails: '',
        expRule: '',
        expSkills: '',
        expUrl: ''
    });

    useEffect(() => {
        showExp(id);
        return () => removeExpRedux()
    }, [showExp, removeExpRedux])

    useEffect(() => {
        if(experience) {
            setFormData({
                expHead: loading || !experience.expHead ? '' : experience.expHead,
                expHeadLink: loading || !experience.expHeadLink ? '' : experience.expHeadLink,
                expDesc: loading || !experience.expDesc ? '' : experience.expDesc,
                expDetails: loading || !experience.expDetails ? '' : experience.expDetails,
                expRule: loading || !experience.expRule ? '' : experience.expRule,
                expSkills: loading || !experience.expSkills ? '' : experience.expSkills + ' ',
                expUrl: loading || !experience.expUrl ? '' : experience.expUrl,
            });    
        }
    }, [loading, experience])

    const { expImgs, expBImg, expGif } = experience;
    const { expHead, expHeadLink, expDesc, expDetails, expRule, expSkills, expUrl } = formData;

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        updateExp(id, formData);
    }

    return (
        <FullWidth>
            <form >
                <DashInputForm 
                    name='expHead'
                    labelName='Experience Name'
                    type='text'
                    value={expHead}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='expHeadLink'
                    labelName='Experience Slag Link'
                    type='text'
                    value={expHeadLink.toLowerCase()}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='expDesc'
                    labelName='Experience Description'
                    type='text'
                    value={expDesc}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='expSkills'
                    labelName='Experience Skills'
                    type='text'
                    value={expSkills}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='expRule'
                    labelName='Experience Rule'
                    type='text'
                    value={expRule}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='expUrl'
                    labelName='Experience Url'
                    type='text'
                    value={expUrl}
                    onChange={handleChange}
                    required />
                <InputHolder>
                    <InputLabel>Experience Details</InputLabel>
                    <InputField 
                        name='expDetails'
                        type='text'
                        value={expDetails}
                        onChange={handleChange}
                        required />
                </InputHolder> 
                <DashButton handleClick={handleSubmit} type='submit' buttonName='Update Experience' />
            </form>
            <UpdateImages expImgs={expImgs} expBImg={expBImg} expGif={expGif} />     
        </FullWidth>
    )
}

UpdateExperience.propTypes = {
    experiences: PropTypes.object.isRequired,
    showExp: PropTypes.func.isRequired,
    updateExp: PropTypes.func.isRequired,
    removeExpRedux: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    experiences: state.experiences
})

const mapDispatchToProps = dispatch => ({
    showExp: (id) => dispatch(showExp(id)),
    updateExp: (id, formData) => dispatch(updateExp(id, formData)),
    removeExpRedux: () => dispatch(removeExpRedux())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateExperience)