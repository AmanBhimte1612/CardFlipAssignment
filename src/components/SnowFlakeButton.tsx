import React, { useState } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

interface Props {
    color?: string;
    onToggle?: any;
}

const SnowFlakeButton = ({ onToggle }: Props) => {
    const [isRed, setIsRed] = useState(true);

    const handleToggle = () => {
        const newState = !isRed;
        setIsRed(newState);
        onToggle(newState);
    };

    return (
        <View>
            <LinearGradient
                colors={[isRed ? '#676767' :'rgb(61, 0, 0)', '#111111']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradientBorder}
            >
                <TouchableOpacity 
                    style={styles.innerButton} 
                    activeOpacity={0.8} 
                    onPress={handleToggle}
                >
                    <SnowFlakeIcon color={isRed ? '#ffffff' : '#ff0000'} />
                </TouchableOpacity>
            </LinearGradient>
            <Text style={[styles.freezeText, { color: isRed ? '#ffffff' : '#ff0000' }]}>
                {isRed ? 'freeze' : 'unfreeze'}
            </Text>
        </View>
    );
};


export default SnowFlakeButton;

const SnowFlakeIcon: React.FC<Props> = ({ color = '#ffffff' }) => {
    return (
        <Svg viewBox="0 0 24 24" width={24} height={24} fill="none">
            <G>
                <Path
                    d="M12 2V18M12 22V18M12 18L15 21M12 18L9 21M15 3L12 6L9 3"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <Path
                    d="M3.33978 7.00042L6.80389 9.00042M6.80389 9.00042L17.1962 15.0004M6.80389 9.00042L5.70581 4.90234M6.80389 9.00042L2.70581 10.0985M17.1962 15.0004L20.6603 17.0004M17.1962 15.0004L21.2943 13.9023M17.1962 15.0004L18.2943 19.0985"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <Path
                    d="M20.66 7.00042L17.1959 9.00042M17.1959 9.00042L6.80364 15.0004M17.1959 9.00042L18.294 4.90234M17.1959 9.00042L21.294 10.0985M6.80364 15.0004L3.33954 17.0004M6.80364 15.0004L2.70557 13.9023M6.80364 15.0004L5.70557 19.0985"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </G>
        </Svg>
    );
};

const styles = StyleSheet.create({
    gradientBorder: {
        padding: 1.5,
        borderRadius: 999,
        alignSelf: 'center',
        marginHorizontal: 5,
        width: 63,
        height: 62,
    },
    innerButton: {
        backgroundColor: '#000000',
        borderRadius: 999,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
    },
    freezeText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 12
    },
});
