import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import {
    SocialIconsContainer,
    SocialIconContainer
} from './styles';

const SocialIcons = () => {
    return (
        <SocialIconsContainer>
            <SocialIconContainer href='https://github.com/hamzaaldirawi' target='_blank'>
                <FontAwesomeIcon icon={ faGithub } />
            </SocialIconContainer>
            <SocialIconContainer href='https://www.linkedin.com/in/hamzaaldirawi/' target='_blank'>
                <FontAwesomeIcon icon={ faLinkedinIn } />
            </SocialIconContainer>
            <SocialIconContainer href='https://twitter.com/hamzaaldirawi' target='_blank'>
                <FontAwesomeIcon icon={ faTwitter } />
            </SocialIconContainer>
            <SocialIconContainer href='https://wa.me/905357340848' target='_blank'>
                <FontAwesomeIcon icon={ faWhatsapp } />
            </SocialIconContainer>
        </SocialIconsContainer>
    )
}

export default SocialIcons;