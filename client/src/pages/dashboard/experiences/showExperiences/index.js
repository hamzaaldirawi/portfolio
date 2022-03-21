import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showExps, deleteExps, deleteExp } from '../../../../redux/reducers/exps/expActions';
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

const ShowExperiences = ({ showExps, deleteExps, deleteExp , experiences: { experiences, expDeleted }}) => {

    useEffect(() => {
        showExps();
    }, [showExps, expDeleted])   

    const navigate = useNavigate();

    let items;
    let pages;
    const maxNumberOfItems = 8;
    const [currentPage, setCurrentPage] = useState(1);
 
    if(experiences) {
        items = experiences;
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
                <TableColumn>Has Imgs</TableColumn>
                <TableColumn>Has BImg</TableColumn>
                <TableColumn>Has Gif</TableColumn>
                <TableColumn>Update</TableColumn>
                <TableColumn>Delete</TableColumn>
            </TableHeader>

        {
            experiences && (
                getPaginatedData().map(({ _id, expHead, expImgs, expBImg, expGif }) => (
                    <TableRow key={_id}>
                        <TableColumn>{expHead}</TableColumn>
                        <TableColumn>{
                            expImgs.length ? ('Yes') : ('No')
                        }</TableColumn>
                        <TableColumn>{
                            expBImg ? ('Yes') : ('No') 
                        }</TableColumn>
                        <TableColumn>{
                            expGif ? ('Yes') : ('No') 
                        }</TableColumn>
                        <TableColumn>
                            <DashButton small style={{'marginLeft': 0, 'justifyContent': 'start'}} buttonName='Update' handleClick={e => {
                                e.preventDefault();
                                navigate(`/my-dash/experiences/${_id}`, { replace: true })
                            }}>Update</DashButton>
                        </TableColumn>
                        <TableColumn>
                            <DashButton small style={{'marginLeft': 0, 'justifyContent': 'start'}} buttonName='X' handleClick={e => {
                                e.preventDefault();
                                if(window.confirm('Are you Sure?') === false) {
                                    return;
                                }
                                deleteExp(_id)
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
                deleteExps();
            }}></DashButton>
            <DashButton buttonName='Add New Experience' handleClick={e => {
                e.preventDefault();
                navigate('/my-dash/experiences/add', { replace:true })
            }}></DashButton>
        </ButtonsHolder>
        </FullWidth>
    )
}

ShowExperiences.propTypes = {
    showExps: PropTypes.func.isRequired,
    deleteExps: PropTypes.func.isRequired,
    deleteExp: PropTypes.func.isRequired,
    experiences: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    showExps: () => dispatch(showExps()),
    deleteExps: () => dispatch(deleteExps()),
    deleteExp: (id) => dispatch(deleteExp(id))
})

const mapStateToProps = state => ({
    experiences: state.experiences
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowExperiences)