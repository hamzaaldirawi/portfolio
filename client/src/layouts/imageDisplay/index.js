import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    PopContainer,
    Close,
    Image
} from './styles'

const ImageDisplay = ({display, image, handleClick}) => {
    return (
        <Container>
        <PopContainer display={display}>
            <Close>
                <FontAwesomeIcon icon={faXmark} onClick={handleClick} />
            </Close>
            <Image src={image} alt='Experience Image' onClick={handleClick} />
        </PopContainer>
        </Container>
    )
}

export default ImageDisplay;