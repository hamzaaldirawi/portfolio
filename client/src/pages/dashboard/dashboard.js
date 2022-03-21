import { connect } from 'react-redux';

import MyProfile from './myProfile';
import {
    FullWidth,
    WelcomeMessage
} from './styles';

import PropTypes from 'prop-types';

const Dashboard = ({auth: {admin}}) => {
    return(
        <FullWidth>
            <WelcomeMessage>
                Welcome Back {admin.name}
            </WelcomeMessage>
            <MyProfile />
        </FullWidth>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);