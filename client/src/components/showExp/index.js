import { useNavigate } from 'react-router-dom';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import {
    ExpStyled,
    ClickableDiv,
    ExpContainer,
    TextHolder,
    SubHeading,
    Heading,
    NumberHolder,
    HeadingButton,
    ButtonMask,
    ButtonText,
    ButtonArrow
} from './sytles';
  
const ShowExp = ({experience}) => {
    const { 
        expHead, 
        expHeadLink,
        expDesc, 
        expBImg,
        expGif,
        number
    } = experience

    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        navigate(`/${expHeadLink}`, { replace : true})
    }

    return (
        <ExpStyled>
            <ClickableDiv to={`/${expHeadLink}`} >
                <ExpContainer image={expBImg} hover={expGif}>
                    <NumberHolder className='numberHolder'>{number < 9 ? ('0' + number) : number}</NumberHolder>
                    <TextHolder>
                        <Heading>{expHead}</Heading>
                        <SubHeading>{expDesc}</SubHeading>   
                        <HeadingButton onClick={handleClick}>
                            <ButtonMask>
                                <ButtonText>Case Study</ButtonText>               
                                </ButtonMask>
                            <ButtonArrow icon={faArrowRightLong}/>
                        </HeadingButton>  
                    </TextHolder>
                </ExpContainer>
            </ClickableDiv>
        </ExpStyled>      
    )  
};

export default ShowExp;