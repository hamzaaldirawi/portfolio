
import { Fragment } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { 
    PreviousButtonStyle,
    NextButtonStyle,
    ButtonsHolder,
    NumberButton
} from './styles';

export const PreviousButton = ({visible, handleBack}) => (
    <PreviousButtonStyle icon={faAngleLeft} visible={visible} onClick={handleBack} />
)

export const NextButton = ({visible, handleNext}) => (
    <NextButtonStyle icon={faAngleRight} visible={visible} onClick={handleNext} />
)

export const PaginationButtons = ({ 
    handleChange,
    visible,
    value, ...otherData }) => {

    return (
        <Fragment>
            <ButtonsHolder>
                <NumberButton 
                onClick={handleChange}
                visible={visible}
                {...otherData}
                >
                {value}
                </NumberButton>
            </ButtonsHolder>    
        </Fragment>
    )
}