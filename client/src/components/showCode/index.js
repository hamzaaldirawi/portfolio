import {
    CodeStyled,
    Clickable,
    CodeContainer,
    ImageDiv,
    BackgroundImg,
    TextHolder,
    Title,
    CodeName,
    NumberP
} from './sytles';

const ShowCode = ({code}) => {
    const { 
        codeName, 
        codeUrl,
        codeBImg,
        codeGif,
        number
    } = code

    return (
        <CodeStyled  hover={codeGif}>
            <Clickable  href={codeUrl.includes('https:') ? (codeUrl) : ('https://' + codeUrl)} target='_blank'>
                <CodeContainer>
                <ImageDiv>
                    <BackgroundImg className='backgroundImage' image={codeBImg} />
                </ImageDiv>
                    <TextHolder>
                    <div>
                        <Title>_Title</Title>
                        <CodeName>{codeName}</CodeName>
                    </div>
                        <NumberP>No. {number < 9 ? ('0' + number) : number}</NumberP>
                    </TextHolder>
                </CodeContainer>
            </Clickable>
        </CodeStyled>       
    )  
};

export default ShowCode;