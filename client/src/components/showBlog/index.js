import {
    BlogStyled,
    Clickable,
    BlogContainer,
    ImageHolder,
    TextHolder,
    Title,
    BlogName,
    BlogText
} from './sytles';

const ShowBlog = ({blog}) => {
    const { 
        blogName,
        blogText,
        blogUrl,
        blogImg
    } = blog

    return (
        <BlogStyled>
            <Clickable  href={blogUrl.includes('https:') ? (blogUrl) : ('https://' + blogUrl)} target='_blank'>
                <BlogContainer>
                    <ImageHolder src={blogImg} alt={blogName} width='auto' height='216'/>
                    <TextHolder>
                        <Title>_Title</Title>
                        <BlogName>{blogName}</BlogName>
                        <BlogText>{blogText}</BlogText>
                    </TextHolder>
                    
                </BlogContainer>
            </Clickable>
        </BlogStyled>       
    )  
};

export default ShowBlog;