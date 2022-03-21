import { Fragment, useState, lazy } from 'react';
import { connect } from 'react-redux';
import { changeDisplay, changeThemeDark, changeThemeLight } from '../../redux/reducers/theme/themeActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// import SocialIcons from '../../components/socialIcons';
// import CloseButton from '../../components/closeButton';

import { 
    BigHeaderContainer,
    LogoCustom,
    HeaderContainer,
    LogoContainer,
    NavbarContainer,
    LinksContainer, 
    LinkContainer, 
    LinkContainerScroll,
    MobileContainer,
    MobileBar,
    MobileMenu,
    LinksContainerMobile,
    LinkContainerMobile,
    LinkContainerMobileScroll
} from './styles';

import PropTypes from 'prop-types';

const SocialIcons = lazy(() => import('../../components/socialIcons'));
const CloseButton = lazy(() => import('../../components/closeButton'));

const ViewHeader = ({ changeDisplay, changeThemeDark, changeThemeLight, blogs, theme }) => {
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
        <BigHeaderContainer display={theme.display.toString()}>
            <HeaderContainer>
                <LogoContainer to='/'>
                    <LogoCustom />
                </LogoContainer>
                <NavbarContainer>
                {/*For Laptop */}
                    <Fragment>
                        <LinksContainer>
                            <LinkContainerScroll
                                to="experiences"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Experineces</LinkContainerScroll>
                            <LinkContainerScroll 
                                to="codes"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Codes</LinkContainerScroll>
                            <LinkContainerScroll 
                                to="blogs"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Blogs</LinkContainerScroll>
                            <LinkContainer onClick={changeDisplay} >Contact</LinkContainer>   
                        </LinksContainer>
                        <LinkContainer to='#'>
                            {
                                localStorage.themeLight ? (
                                    <FontAwesomeIcon onClick={handleThemeDark} icon={faSun} />
                                ) : (
                                    <FontAwesomeIcon onClick={handleThemeLight} icon={faMoon} />
                                )
                            }
                        </LinkContainer> 
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
                            <LinkContainerMobileScroll 
                                to="experiences"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Experineces</LinkContainerMobileScroll>
                            <LinkContainerMobileScroll 
                                to="codes"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Codes</LinkContainerMobileScroll>
                            <LinkContainerMobileScroll 
                                to="blogs"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Blogs</LinkContainerMobileScroll>
                            <LinkContainerMobile onClick={changeDisplay}>Contact</LinkContainerMobile> 
                        </LinksContainerMobile>
                        <SocialIcons />  
                </MobileMenu>
            </HeaderContainer>
        </BigHeaderContainer>
    )
}
ViewHeader.propTypes = {
    changeThemeDark: PropTypes.func.isRequired,
    changeThemeLight: PropTypes.func.isRequired,
    changeDisplay: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    theme: state.theme
})

const mapDispatchToProps = dispatch => ({
    changeThemeDark: () => dispatch(changeThemeDark()),
    changeThemeLight: () => dispatch(changeThemeLight()),
    changeDisplay: () => dispatch(changeDisplay())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewHeader);