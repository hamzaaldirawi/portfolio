import { Fragment, lazy } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

import Loading from '../../components/loading';
// import CustomButton from '../../components/button';
// import SocialIcons from '../../components/socialIcons';

import { changeDisplay } from '../../redux/reducers/theme/themeActions';

import { 
   IntroContainer,
   LeftContainer,
   NameHeading,
   LogoContainer,
   LogoBelow,
   SocialIconContainer,
   SolganHeading,
   ToWork,
} from './styles';

import PropTypes from 'prop-types';

const SocialIcons = lazy(() => import('../../components/socialIcons'));
const CustomButton = lazy(() => import('../../components/button'));

const ViewIntro = ({changeDisplay, theme, workAt, workLink}) => {
   return (
      <Fragment >
         <IntroContainer display={theme.display.toString()}>
         <LeftContainer>
            <NameHeading>Hamza Aldirawi</NameHeading>
            <SolganHeading>Full Stack Web Developer works at  
            <a href={`${workLink}`} target="_blank" rel="noreferrer"> {workAt}</a></SolganHeading>
            <CustomButton handleClick={changeDisplay} buttonName='About Me' />
         </LeftContainer>
         <LogoContainer>
            <LogoBelow />
         </LogoContainer>
         <SocialIconContainer>
            <SocialIcons />
         </SocialIconContainer> 
         </IntroContainer>
         <ToWork 
            display={theme.display.toString()}
            to="experiences"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            >
            <p>Works</p>   
            <FontAwesomeIcon icon={faArrowDownLong} viewBox='0 0 320 130' />            
         </ToWork>
      </Fragment> 
   )
}

ViewIntro.propTypes = {
   changeDisplay: PropTypes.func.isRequired,
   theme: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   theme: state.theme
})

const mapDispatchToProps = dispatch => ({
   changeDisplay: () => dispatch(changeDisplay())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewIntro);