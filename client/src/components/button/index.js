import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { 
    HeadingButton,
    ButtonMask,
    ButtonText,
    ButtonArrow
} from './styles';

const CustomButton = ({ buttonName, handleClick, nopadding, type, role, display, padding, pointer, cursor }) => {
    return (
        <HeadingButton nopadding={nopadding} type={type} role={role} onClick={handleClick} style={{ 'padding': padding, 'pointerEvents': pointer, 'cursor': cursor }}>
                <ButtonMask>
                    <ButtonText>{ buttonName }</ButtonText>               
                </ButtonMask>
            <ButtonArrow style={{ 'display': display }} icon={faArrowRightLong} viewBox='90 100 280 280' />
        </HeadingButton>  
    )
}

export default CustomButton;