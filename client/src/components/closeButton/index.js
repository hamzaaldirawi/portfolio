import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { 
    CloseDiv,
    FontIcon
} from './styles';

const CloseButton = ({handleClick, ...otherProps}) => ( 
    <CloseDiv onClick={handleClick} {...otherProps} >
        <FontIcon icon={faXmark} style={{zIndex: '26'}}/>
    </CloseDiv>
);

export default CloseButton;
