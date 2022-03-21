import { connect } from 'react-redux';
import { changeDisplay } from '../../redux/reducers/theme/themeActions';

import { 
    FooterHolder,
    LogoCustom,
    FooterLinks,
    LogoContainer,
    LinkContainer,
    LinkName,
    Pargraph,
    CopyRight,
    Contact
} from './styles';

import PropTypes from 'prop-types';

const Footer = ({ changeDisplay, theme }) => (
    <FooterHolder display={theme.display.toString()}>
        <LogoContainer to='/'>
            <LogoCustom />
        </LogoContainer>
            <FooterLinks>
                    <LinkContainer to='https://github.com/hamzaaldirawi' target='_blank'><LinkName>Github</LinkName></LinkContainer>
                    <LinkContainer to='https://www.linkedin.com/in/hamzaaldirawi/' target='_blank'><LinkName>LinkedIn</LinkName></LinkContainer>
                    <LinkContainer to='https://twitter.com/hamzaaldirawi' target='_blank'><LinkName>Twitter</LinkName></LinkContainer>
                    <LinkContainer to='https://wa.me/905357340848' target='_blank'><LinkName>WhatsApp</LinkName></LinkContainer>
            </FooterLinks>
            <CopyRight>
                <Pargraph>&copy;{new Date().getFullYear()} Hamza Aldirawi _ <Contact onClick={changeDisplay} >Contact</Contact>   
                </Pargraph>
            </CopyRight>
    </FooterHolder>
)

Footer.propTypes = {
    theme: PropTypes.object.isRequired,
    changeDisplay: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    theme: state.theme
})

const mapDispatchToProps = dispatch => ({
    changeDisplay: () => dispatch(changeDisplay())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);