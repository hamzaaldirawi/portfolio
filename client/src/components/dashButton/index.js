
import { 
    HeadingButton,
    ButtonMask,
} from './styles';

const DashButton = ({ buttonName, handleClick, type, padding, pointer, cursor, small, ...otherData }) => {
    return (
        <HeadingButton 
            type={type} 
            small={small}
            onClick={handleClick} 
            style={{ 'padding': padding, 'pointerEvents': pointer, 'cursor': cursor }}
            {...otherData}
            >
                <ButtonMask>
                    {buttonName}      
                </ButtonMask>
        </HeadingButton>  
    )
}

export default DashButton;