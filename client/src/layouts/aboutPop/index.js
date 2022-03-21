import { lazy } from 'react';
import { connect } from 'react-redux';
import { changeDisplay } from '../../redux/reducers/theme/themeActions';
import { faNodeJs, faReact, faJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import Loading from '../../components/loading';
// import Alert from '../Alert';
// import ContactForm from '../../components/contactForm';

import {
    PopContainer,
    CloseButtonCustom,
    PopHolder,
    TextHolder,
    TextHeading,
    TextSolgan,
    LeftPop,
    AboutDiv,
    AboutParagraph,
    IconsHolder,
    IconWithTextHolder,
    LabelBelowIcon,
    IconSvg,
    RightPop,
    ContactDiv
} from './styles'

import PropTypes from 'prop-types';

const Alert = lazy(() => import('../Alert'));
const ContactForm = lazy(() => import('../../components/contactForm'));

const PopUp = ({changeDisplay, theme, workAt, workLink}) => {

    return (
        <PopContainer display={theme.display.toString()}>
            <PopHolder>
                <LeftPop>
                    <AboutDiv>About</AboutDiv>
                    <TextHolder>
                        <TextHeading>About Me</TextHeading>
                        <TextSolgan>Full-Stack Web Developer (MERN)</TextSolgan>
                        <AboutParagraph>I'm Hamza Aldirawi, a 30-year-old Palestinian works at  
                        <a href={`${workLink}`} target="_blank" rel="noreferrer"> {workAt}</a>. <br/>
                        An effective and enthusiastic Full-Stack developer! I like new challenges and new projects that help
                        me invest all my skills and experience into succeeding in them.
                        <br />I like to develop rich web experiences & web applications.
                        Actually looking for hire.
                        </AboutParagraph>
                        <IconsHolder>
                            <IconWithTextHolder>
                                <LabelBelowIcon>Node.Js</LabelBelowIcon>
                                <IconSvg className='NodeIcon' icon={faNodeJs} />
                            </IconWithTextHolder>
                            <IconWithTextHolder>
                                <LabelBelowIcon>NPM</LabelBelowIcon>
                                <IconSvg className='NpmIcon' icon={faNpm} />
                            </IconWithTextHolder>
                            <IconWithTextHolder>
                                <LabelBelowIcon>React.Js</LabelBelowIcon>
                                <IconSvg className='ReactIcon' icon={faReact} />
                            </IconWithTextHolder>
                            <IconWithTextHolder>
                                <LabelBelowIcon>JavaScript</LabelBelowIcon>
                                <IconSvg className='JSIcon' icon={faJs} />
                            </IconWithTextHolder>
                            <IconWithTextHolder>
                                <LabelBelowIcon>MongoBD</LabelBelowIcon>
                                <IconSvg className='DatabaseIcon' icon={faDatabase} />
                            </IconWithTextHolder>
                        </IconsHolder>
                    </TextHolder>
                </LeftPop>
                <RightPop>
                    <CloseButtonCustom handleClick={changeDisplay} />
                    <ContactDiv>Contact</ContactDiv>
                    <TextHolder>
                        <TextHeading>Let's Talk</TextHeading>
                        <TextSolgan>New projects, freelance inquiry or even a coffee.</TextSolgan>
                        <ContactForm />
                    </TextHolder>
                </RightPop>
            </PopHolder>
        <Alert />
        </PopContainer>
    )
}

PopUp.propTypes = {
   changeDisplay: PropTypes.func.isRequired,
   theme: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
   theme: state.theme,
})

const mapDispatchToProps = dispatch => ({
   changeDisplay: () => dispatch(changeDisplay())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);