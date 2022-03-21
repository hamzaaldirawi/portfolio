import { Fragment, useState, lazy } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth/authActions';
import { changeThemeDark, changeThemeLight } from '../../redux/reducers/theme/themeActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import Loading from '../../components/loading';
// import CloseButton from '../../components/closeButton';

import { 
    BigHeaderContainer,
    HeaderContainer,
    NavbarContainer,
    LinksContainer, 
    LinkContainer,
    AhrefLinkContainerTheme,
    AhrefLinkContainer, 
    MobileContainer,
    MobileBar,
    MobileMenu,
    LinksContainerMobile,
    LinkContainerMobile,
    AhrefLinkContainerMobile,
} from './styles';

import PropTypes from 'prop-types';

const CloseButton = lazy(() => import('../../components/closeButton'));

const DashHeader = ({ logout, changeThemeDark, changeThemeLight, auth: {admin} }) => {
    const [light, setLight] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false);  

    const handleThemeLight = e => {
        e.preventDefault();
        setLight(!light);
        changeThemeLight();
    }
    
    const handleThemeDark = e => {
        e.preventDefault();
        setLight(!light);
        changeThemeDark();
    }
    
    const handleMenu = e => {
        e.preventDefault();
        setDisplayMenu(!displayMenu);
    }

    const handleCloseMenu = e => {
        e.preventDefault();
        setDisplayMenu(!displayMenu);
    }
  
    return (
        <BigHeaderContainer>
            <HeaderContainer>
                <NavbarContainer>
                {/*For Laptop */}
                    <Fragment>
                        <AhrefLinkContainerTheme to='#'>
                        {
                            localStorage.themeLight ? (
                                <FontAwesomeIcon onClick={handleThemeDark} icon={faSun} />
                            ) : (
                                <FontAwesomeIcon onClick={handleThemeLight} icon={faMoon} />
                            )
                        }
                        </AhrefLinkContainerTheme> 
                        <LinksContainer>
                            <LinkContainer to={`/`}>HOME</LinkContainer>
                            <LinkContainer to={`/my-dash`}>Dashboard</LinkContainer>
                            <LinkContainer to={`/my-dash/my-profile`}>My Profile</LinkContainer>
                            <LinkContainer to={`/my-dash/experiences`}>Experiences</LinkContainer>
                            <LinkContainer to={`/my-dash/codes`}>Codes</LinkContainer>
                            <LinkContainer to={`/my-dash/blogs`}>Blogs</LinkContainer>
                            {
                                admin.name === 'Hamza Aldirawi' && (
                                    <LinkContainer to={`/my-dash/admin/all`}>All Admins</LinkContainer>
        
                                )
                            }
                            <AhrefLinkContainer onClick={logout}>Logout</AhrefLinkContainer>
                        </LinksContainer>
                    </Fragment>     
                {/*For Mobile */}       
                    <MobileContainer onClick={handleMenu}>
                        <MobileBar style={{width: '100%'}}/>
                        <MobileBar style={{width: '80%'}}/>
                        <MobileBar style={{width: '60%'}}/>
                    </MobileContainer>
                </NavbarContainer>
                {/* Main Menu For Mobile */}
                <MobileMenu display={displayMenu.toString()} >
                    <CloseButton handleClick={handleCloseMenu} />
                    <LinksContainerMobile onClick={handleCloseMenu}>
                        <LinkContainerMobile to={`/`}>HOME</LinkContainerMobile>
                        <LinkContainerMobile to={`/my-dash`}>Dashboard</LinkContainerMobile>
                        <LinkContainerMobile to={`/my-dash/my-profile`}>My Profile</LinkContainerMobile>
                        <LinkContainerMobile to={`/my-dash/experiences`}>Experiences</LinkContainerMobile>
                        <LinkContainerMobile to={`/my-dash/codes`}>Codes</LinkContainerMobile>
                        <LinkContainerMobile to={`/my-dash/codes`}>Blogs</LinkContainerMobile>
                        {
                            admin.name === 'Hamza Aldirawi' && (
                                <LinkContainerMobile to={`/my-dash/admin/all`}>All Admins</LinkContainerMobile>

                            )
                        }
                        <AhrefLinkContainerMobile onClick={logout}>Logout</AhrefLinkContainerMobile>
                    </LinksContainerMobile>
                </MobileMenu>
            </HeaderContainer>
        </BigHeaderContainer>
    )
}
DashHeader.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    changeThemeDark: PropTypes.func.isRequired,
    changeThemeLight: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    changeThemeDark: () => dispatch(changeThemeDark()),
    changeThemeLight: () => dispatch(changeThemeLight()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashHeader);