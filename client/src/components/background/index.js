import { useState } from "react";
import { ReactComponent as Traingle } from '../../assets/background/triangle-one.svg';
import { ReactComponent as TraingleGreen } from '../../assets/background/triangle-green.svg';
import { ReactComponent as TraingleRed } from '../../assets/background/triangle-red.svg';

import { BackgroundFull } from "./styles";
const Background = () => {
    const [x, setXDirection] = useState(0);
    const [y, setYDirection] = useState(0);
 
    const mouseMove = e => {
       setXDirection(e.screenX);
       setYDirection(e.screenY);
    }

    let xD = x/10 + 5;
    let yD = y/10 + 5;

    return (
        <BackgroundFull onMouseMove={mouseMove}>
            <TraingleRed style={{
                position: 'absolute',
                top: `17%`,
                right: `67%`,
                transform: `rotate(45deg) translate(${xD}%, ${yD}%)`
            }} />
            <Traingle style={{
                position: 'absolute',
                top: '15%',
                right: '50%',
                transform: `rotate(75deg) translate(${xD}%, ${yD}%)`
            }} />
            <TraingleGreen style={{
                position: 'absolute',
                top: '22%',
                right: '20%',
                transform: `rotate(90deg) translate(${xD}%, ${yD}%)`
            }} />
            <TraingleGreen style={{
                position: 'absolute',
                top: '35%',
                right: '75%',
                transform: `rotate(45deg) translate(${xD}%, ${yD}%)`
            }} />
            <TraingleRed style={{
                position: 'absolute',
                top: '37%',
                right: '40%',
                transform: `rotate(85deg) translate(${xD}%, ${yD}%)`
            }} />
            <Traingle style={{
                position: 'absolute',
                top: '40%',
                right: '15%',
                transform: `rotate(25deg) translate(${xD}%, ${yD}%)`
            }} />
            <TraingleGreen style={{
                position: 'absolute',
                top: '65%',
                right: '85%',
                transform: `rotate(120deg) translate(${xD}%, ${yD}%)`
            }} />
            <Traingle style={{
                position: 'absolute',
                top: '70%',
                right: '65%',
                transform: `rotate(55deg) translate(${xD}%, ${yD}%)`
            }} />
            <TraingleRed style={{
                position: 'absolute',
                top: '72%',
                right: '43%',
                transform: `rotate(170deg) translate(${xD}%, ${yD}%)`
            }} />
            <TraingleGreen style={{
                position: 'absolute',
                top: '68%',
                right: '18%',
                transform: `rotate(100deg) translate(${xD}%, ${yD}%)`
            }} />
        </BackgroundFull>
    )
}

export default Background;