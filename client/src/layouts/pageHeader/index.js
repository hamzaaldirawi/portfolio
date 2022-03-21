import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeThemeDark, changeThemeLight } from '../../redux/reducers/theme/themeActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { 
    BigHeaderContainer,
    LogoCustom,
    HeaderContainer,
    LogoContainer,
    NavbarContainer,
    LinksContainer, 
    LinkContainer, 
    LinkContainerScroll,
} from './styles';

import PropTypes from 'prop-types';

const PageHeader = ({ changeThemeDark, changeThemeLight, theme }) => {
    const [light, setLight] = useState(false);
    const [scroll, setScroll] = useState(0);
    const onScroll = e => {
        setScroll(e.target.documentElement.scrollTop)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        setScroll(window.pageYOffset);

        return () => {
            window.removeEventListener("scroll", onScroll);
            setScroll(0)
        }
    }, [scroll])

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
    
    return (
        <BigHeaderContainer display={scroll === 0 ? 'false' : 'true'}>
        <HeaderContainer height={theme.display.toString()}>
            <LogoContainer to='/'>
                <LogoCustom />
            </LogoContainer>
            <NavbarContainer>
            {/*For Laptop */}
                <Fragment>
                    <LinksContainer>
                        <LinkContainerScroll
                            to="/"
                        >Back Home</LinkContainerScroll> 
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
            </NavbarContainer>
        </HeaderContainer>
        </BigHeaderContainer>
    )
}
PageHeader.propTypes = {
    changeThemeDark: PropTypes.func.isRequired,
    changeThemeLight: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    theme: state.theme
})

const mapDispatchToProps = dispatch => ({
    changeThemeDark: () => dispatch(changeThemeDark()),
    changeThemeLight: () => dispatch(changeThemeLight()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);