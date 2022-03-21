import {
    Container,
    Heading,
    BackHome
} from './styles'

const NotFound = () => (
    <Container>
        <Heading>Page Not Found 404 ...</Heading>
        <BackHome to='/'>Back Home</BackHome>
    </Container>
)

export default NotFound;