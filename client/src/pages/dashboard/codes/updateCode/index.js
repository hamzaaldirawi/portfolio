import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { showCode, updateCode, removeCodeRedux } from '../../../../redux/reducers/codes/codeActions';
import UpdateImages from "../updateImages";

import DashInputForm from '../../../../components/inputDashboard';
import DashButton from '../../../../components/dashButton';

import { FullWidth } from '../../../../components/fullWidth';

import PropTypes from 'prop-types';

const UpdateCode = ({ 
    showCode, 
    updateCode, 
    removeCodeRedux, 
    codes: {code, loading} 
}) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        codeName: '',
        codeUrl: ''
    });

    useEffect(() => {
        showCode(id);
        return () => removeCodeRedux()
    }, [showCode, loading, id, removeCodeRedux])

    useEffect(() => {
        if(code) {
            setFormData({
                codeName: loading || !code.codeName ? '' : code.codeName,
                codeUrl: loading || !code.codeUrl ? '' : code.codeUrl,
            });    
        }
    }, [loading, code])

    const { codeBImg, codeGif } = code;
    const { codeName, codeUrl } = formData;

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        updateCode(id, formData);
    }

    return (
        <FullWidth>
            <form >
                <DashInputForm 
                    name='codeName'
                    labelName='Code Name'
                    type='text'
                    value={codeName}
                    onChange={handleChange}
                    required />
                <DashInputForm 
                    name='codeUrl'
                    labelName='Code Url'
                    type='text'
                    value={codeUrl}
                    onChange={handleChange}
                    required />
                <DashButton handleClick={handleSubmit} type='submit' buttonName='Update Code' />
            </form>
            <UpdateImages codeBImg={codeBImg} codeGif={codeGif} />     
        </FullWidth>
    )
}

UpdateCode.propTypes = {
    codes: PropTypes.object.isRequired,
    showCode: PropTypes.func.isRequired,
    updateCode: PropTypes.func.isRequired,
    removeCodeRedux: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    codes: state.codes
})

const mapDispatchToProps = dispatch => ({
    showCode: (id) => dispatch(showCode(id)),
    updateCode: (id, formData) => dispatch(updateCode(id, formData)),
    removeCodeRedux: () => dispatch(removeCodeRedux())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCode);