import React, { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Copy, EyeOff } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { faker } from '@faker-js/faker';

type Props = {
    toggle: boolean;
};

const Card = ({ toggle = false }: Props) => {
    const morphAnim = useRef(new Animated.Value(0)).current;
    const contentOpacity = useRef(new Animated.Value(1)).current;
    const contentTranslateY = useRef(new Animated.Value(0)).current;


    const randomCardNumber = faker.finance.creditCardNumber('Visa').match(/.{1,4}/g);
    const randomExpiry = faker.date.future().toISOString().slice(2, 7).replace('-', '/'); // MM/YY format
    const randomCVV = faker.finance.creditCardCVV();

    useEffect(() => {

        Animated.parallel([
            Animated.timing(morphAnim, {
                toValue: !toggle ? 1 : 0,
                duration: 600,
                useNativeDriver: false,
            }),
            Animated.timing(contentOpacity, {
                toValue: !toggle ? 0 : 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(contentTranslateY, {
                toValue: !toggle ? 20 : 0, 
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, [toggle]);

    

    const opacityInterpolation = morphAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.7], // Fade effect
    });

    const backgroundColorInterpolation = morphAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(199, 199, 199, 0.35)', 'rgba(255, 255, 255, 0.97)'],

    });


    return (
        <View style={styles.mainContainer}>

            <Animated.View style={[
                styles.cardContainer,
                {
                    backgroundColor: backgroundColorInterpolation,
                    opacity: opacityInterpolation,
                },
            ]}>
                <Image
                    source={require('../assets/frozen_bg.png')}
                    style={styles.cardImage}
                    resizeMode="cover"
                />

                <>

                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0.49)', 'rgba(0, 0, 0, 0.59)']}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                locations={[0.1, 0.9]}
                                style={styles.gradient}
                            />

                            <Animated.View style={[
                        styles.contentOverlay,
                        {
                            opacity: contentOpacity,
                            transform: [{ translateY: contentTranslateY }],
                        },
                    ]}>
                                <Image
                                    source={require('../assets/yolo_logo.png')}
                                    style={{ width: 60, height: 18 }}
                                    resizeMode="stretch"
                                />

                                <Image
                                    source={require('../assets/yes-bank-logo.png')}
                                    style={styles.yesBankLogo}
                                    resizeMode="contain"
                                />

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <View style={styles.cardDetails}>
                                        {randomCardNumber.map((block, index) => (
                                            <Text key={index} style={styles.cardNumber}>{block}</Text>
                                        ))}
                                        <View style={styles.expiryCvv}>
                                            <TouchableOpacity style={styles.copyButton}>
                                                <Copy size={24} color="red" />
                                                <Text style={styles.copyText}>copy details</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={{ position: 'absolute', right: 10 }}>
                                        <View>
                                            <Text style={{ color: '#676767' }}>expiry</Text>
                                            <Text style={{ color: 'white', fontSize: 18 }}>{randomExpiry}</Text>
                                        </View>
                                        <View style={{ marginTop: 25 }}>
                                            <Text style={{ color: '#676767' }}>cvv</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: '#ffffff', fontSize: 30 }}>***</Text>
                                                <EyeOff size={28} color="red" style={{ marginLeft: 8, marginTop: 5 }} />
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <Image
                                    source={require('../assets/Rupaylogo.png')}
                                    style={styles.rupayLogo}
                                    resizeMode="contain"
                                />
                            </Animated.View>

                        
                </>

            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'flex-start',
        position: 'relative',
    },
    gradient: {
        borderRadius: 20,
        position: 'absolute',
        width: 180,
        height: 300,
    },
    cardContainer: {
        width: 180,
        height: 300,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'black',
        position: 'absolute',
        backfaceVisibility: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    contentOverlay: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    yesBankLogo: {
        width: 100,
        height: 28,
        position: 'absolute',
        top: 10,
        right: -8,
    },
    cardDetails: {
        marginTop: 5,
        marginBottom: 40,
    },
    cardNumber: {
        fontSize: 18,
        color: 'white',
        letterSpacing: 3,
        marginBottom: 4,
        fontFamily: 'Odibee Sans',
    },
    expiryCvv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    copyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        padding: 8,
    },
    copyText: {
        color: 'red',
        marginLeft: 8,
    },
    rupayLogo: {
        width: 100,
        height: 30,
        position: 'absolute',
        bottom: 12,
        right: -10,
    },
});

export default Card;