import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showCodes, deleteCodes, deleteCode } from '../../../../redux/reducers/codes/codeActions';
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

const ShowCodes = ({ showCodes, deleteCodes, deleteCode, codes: { codes, codeDeleted }}) => {

    useEffect(() => {
        showCodes();
    }, [showCodes, codeDeleted])   

    const navigate = useNavigate();

    let items;
    let pages;
    const maxNumberOfItems = 8;
    const [currentPage, setCurrentPage] = useState(1);
 
    if(codes) {
        items = codes;
        pages = Math.ceil(items.length / maxNumberOfItems);
    }      

    const handleBackPage = () => {
        setCurrentPage(page => page - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(page => page + 1);
    };

    const handleClick = (e) => {
        const pageNumber = Number(e.target.textContent);
        setCurrentPage(pageNumber);
    };

    const getPaginatedData = () => {
        const startIndex = currentPage * maxNumberOfItems - maxNumberOfItems;
        const endIndex = startIndex + maxNumberOfItems;
        return items.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        return new Array(pages).fill().map((_, idx) => idx + 1);
    }

    return (    
        <FullWidth>
        <ul>
            <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Has BImg</TableColumn>
                <TableColumn>Has Gif</TableColumn>
                <TableColumn>Update</TableColumn>
                <TableColumn>Delete</TableColumn>
            </TableHeader>

        {
            codes && (
                getPaginatedData().map(({ _id, codeName, codeBImg, codeGif }) => (
                    <TableRow key={_id}>
                        <TableColumn>{codeName}</TableColumn>
                        <TableColumn>{
                            codeBImg ? ('Yes') : ('No') 
                        }</TableColumn>
                        <TableColumn>{
                            codeGif ? ('Yes') : ('No') 
                        }</TableColumn>
                        <TableColumn>
                            <DashButton small style={{'marginLeft': 0, 'justifyContent': 'start'}} buttonName='Update' handleClick={e => {
                                e.preventDefault();
                                navigate(`/my-dash/codes/${_id}`, { replace: true })
                            }}>Update</DashButton>
                        </TableColumn>
                        <TableColumn>
                            <DashButton small style={{'marginLeft': 0, 'justifyContent': 'start'}} buttonName='X' handleClick={e => {
                                e.preventDefault();
                                if(window.confirm('Are you Sure?') === false) {
                                    return;
                                }
                                deleteCode(_id)
                            }}>Delete</DashButton> 
                        </TableColumn>  
                    </TableRow>
                ))
            )
        }
        </ul>

        <Container>
            <PreviousButton visible={`${currentPage === 1 ? 'false' : 'true'}`} handleBack={handleBackPage}/>
            {
                getPaginationGroup().map((value, index) => (
                    <PaginationButtons 
                    key={index}
                    value={value}
                    visible={`${currentPage === value ? 'false' : 'true'}`}
                    handleChange={(handleClick)}
                    />
                ))
            }
            <NextButton visible={`${currentPage === pages ? 'false' : 'true'}`} handleNext={handleNextPage}/>
        </Container>       
    
        <ButtonsHolder>
            <DashButton buttonName='Delete All' handleClick={e => {
                e.preventDefault();
                alert("Are you sure? This Can't be undo?");
                deleteCodes();
            }}></DashButton>
            <DashButton buttonName='Add New Code' handleClick={e => {
                e.preventDefault();
                navigate('/my-dash/codes/add', { replace:true })
            }}></DashButton>
        </ButtonsHolder>
        </FullWidth>
    )
}

ShowCodes.propTypes = {
    showCodes: PropTypes.func.isRequired,
    deleteCodes: PropTypes.func.isRequired,
    deleteCode: PropTypes.func.isRequired,
    codes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    showCodes: () => dispatch(showCodes()),
    deleteCodes: () => dispatch(deleteCodes()),
    deleteCode: (id) => dispatch(deleteCode(id))
})

const mapStateToProps = state => ({
    codes: state.codes
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowCodes)