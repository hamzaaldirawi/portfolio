import { Fragment } from 'react';
import { connect } from 'react-redux';

import { AlertContainer, AlertP } from './styles';

const Alert = ({ alerts }) => {
    return (
        <AlertContainer> 
        {
            alerts.length ? (
                alerts.map(alert => (
                    <AlertP key={alert.id} type={alert.alertType}>{alert.message}</AlertP>
                )) 
            ) : (
                <Fragment />
            )
        }
        </AlertContainer>
        
    )
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);