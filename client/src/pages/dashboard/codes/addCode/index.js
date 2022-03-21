import { Fragment, useState } from "react";
import { connect } from 'react-redux';

import { addCode } from '../../../../redux/reducers/codes/codeActions';
import UploadImages from "../uploadImages";

import InputForm from '../../../../components/input';
import DashButton from '../../../../components/dashButton';

import { FullWidth } from '../../../../components/fullWidth';

import PropTypes from 'prop-types';

const AddCode = ({ addCode, codes: {code} }) => {
    const [formData, setFormData] = useState({
        codeName: '',
        codeUrl: ''
    })   

    const { codeName, codeUrl } = formData;
    const { _id } = code;

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        addCode(formData);
    }

    return (
        <Fragment>
            {
                !_id ? (
                    <FullWidth>
                        <form >
                            <InputForm 
                                name='codeName'
                                labelName='Code Name'
                                type='text'
                                value={codeName}
                                onChange={handleChange}
                                required />
                            <InputForm 
                                name='codeUrl'
                                labelName='Code Url'
                                type='text'
                                value={codeUrl}
                                onChange={handleChange}
                                required />
                            <DashButton handleClick={handleSubmit} type='submit' buttonName='Add Code' />
                        </form>
                    </FullWidth>
                ) : (
                    <UploadImages />
                )
            }    
        </Fragment>
    )
}

AddCode.propTypes = {
    codes: PropTypes.object.isRequired,
    addCode: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    codes: state.codes
})

const mapDispatchToProps = dispatch => ({
    addCode: (formData) => dispatch(addCode(formData))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddCode)