import React from 'react';
import {  Dimensions,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';



const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const w = 880
const h = 880


const CurvedLine = () => {
    return (
        <Svg width={width} height={80}>
            <Defs>
                <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="0%" stopColor="black" />
                    <Stop offset="50%" stopColor="white" />
                    <Stop offset="100%" stopColor="black" />
                </LinearGradient>
            </Defs>

            <Path
                d={`M0,60 Q${width / 2},-10 ${width},60`}
                stroke="url(#grad)"
                fill="none"
                strokeWidth={'1.5'}
            />
        </Svg>
    );
};


export default CurvedLine