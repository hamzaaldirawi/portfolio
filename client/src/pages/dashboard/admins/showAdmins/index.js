import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showAdmins, deleteAdmin } from '../../../../redux/reducers/auth/authActions';
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

const ShowAdmins = ({ showAdmins, deleteAdmin , auth: { admins, adminDeleted }}) => {
    useEffect(() => {
        showAdmins();
    }, [showAdmins, adminDeleted]);

    const navigate = useNavigate();

    let items;
    let pages;
    const maxNumberOfItems = 8;
    const [currentPage, setCurrentPage] = useState(1);
 
    if(admins) {
        items = admins;
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
                <TableColumn>Email</TableColumn>
                <TableColumn>Update</TableColumn>
                <TableColumn>Delete</TableColumn>
            </TableHeader>
            {
                admins && (
                    getPaginatedData().map((admin) => (
                        <TableRow key={admin._id}>
                            <TableColumn>{admin.name}</TableColumn>
                            <TableColumn>{admin.email}</TableColumn>
                            <TableColumn>
                                <DashButton small style={{'marginLeft': 0, 'justifyContent': 'start'}} buttonName='Update' handleClick={e => {
                                    e.preventDefault();
                                    navigate(`/my-dash/admin/${admin._id}`, { replace: true })
                                }}>View</DashButton>
                            </TableColumn>
                            <TableColumn>
                                <DashButton small style={{'marginLeft': 0, 'justifyContent': 'start'}} buttonName='X' handleClick={e => {
                                    e.preventDefault();
                                    if(window.confirm('Are you Sure?') === false) {
                                        return;
                                    }
                                    deleteAdmin(admin._id)
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
                <DashButton buttonName='Register a new Admin' handleClick={e => {
                    e.preventDefault();
                    navigate('/my-dash/register', { replace:true })
                }}></DashButton>
            </ButtonsHolder>
          
        </FullWidth>
    )
}

ShowAdmins.propTypes = {
    showAdmins: PropTypes.func.isRequired,
    deleteAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    showAdmins: () => dispatch(showAdmins()),
    deleteAdmin: (id) => dispatch(deleteAdmin(id))
})

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAdmins)