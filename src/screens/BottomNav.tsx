import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Svg, { Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';


import { BadgePercentIcon } from 'lucide-react-native';
import { House } from 'lucide-react-native';
import { Maximize } from 'lucide-react-native';

import GinnieScreen from './GinnieScreen';
import YoloPayScreen from './YoloPayScreen';
import HomeScreen from './HomeScreen';
import { Image } from 'react-native';
import CurvedLine from '../components/CurvedLine';

const Tab = createBottomTabNavigator();



export default function App() {
    return (
        <NavigationContainer >
            <View style={{ flex: 1, position: 'relative' }}>
                <View style={styles.curveContainer}>
                    <CurvedLine />
                </View>
                <Tab.Navigator
                    initialRouteName="yolopay"

                    screenOptions={{
                        tabBarStyle: styles.tabBar,
                        tabBarShowLabel: true,
                        tabBarLabelStyle: styles.tabLabel,
                        tabBarActiveTintColor: 'white',
                        tabBarInactiveTintColor: '#666',
                        headerShown: false,
                    }}
                >
                    <Tab.Screen
                        name="home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({ color, focused }) => (
                                <LinearGradient
                                    colors={['black', '#666']}
                                    start={{ x: 0.5, y: 1 }}
                                    end={{ x: 0.5, y: 0 }}
                                    style={styles.gradientBorder}
                                >
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            backgroundColor: 'black',
                                            width: 48,
                                            height: 48,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/icons/home.png')}
                                            style={{
                                                tintColor: 'white',
                                                width: 24,
                                                height: 24,
                                            }}
                                        />
                                    </TouchableOpacity>
                                </LinearGradient>
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="yolopay"
                        component={YoloPayScreen}
                        options={{
                            tabBarIcon: ({ color, focused }) => (

                                <LinearGradient
                                    colors={['black', 'white']}
                                    start={{ x: 0.5, y: 1 }}
                                    end={{ x: 0.5, y: 0 }}
                                    style={styles.gradientActiveBorder}
                                >
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            backgroundColor: 'black',
                                            width: 60,
                                            height: 60,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <LinearGradient
                                            colors={['#ffffffff', '#1A1A1A']} // Customize top → bottom gradient colors
                                            start={{ x: 0.5, y: 0 }}
                                            end={{ x: 0.5, y: 1 }}
                                            style={{
                                    
                                                borderRadius: 4, // Optional: rounded background
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                source={require('../assets/icons/scanner.png')}
                                                style={{
                                                    tintColor: 'white',
                                                    width: 24,
                                                    height: 24,
                                                }}
                                            />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </LinearGradient>


                            ),
                        }}
                    />
                    <Tab.Screen
                        name="ginie"
                        component={GinnieScreen}
                        options={{
                            tabBarIcon: ({ color, focused }) => (
                                <LinearGradient
                                    colors={['black', '#666']}
                                    start={{ x: 0.5, y: 1 }}
                                    end={{ x: 0.5, y: 0 }}
                                    style={styles.gradientBorder}
                                >
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            backgroundColor: 'black',
                                            width: 48,
                                            height: 48,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/icons/perent.png')}
                                            style={{
                                                tintColor: 'white',
                                                width: 24,
                                                height: 24,
                                            }}
                                        />
                                    </TouchableOpacity>
                                </LinearGradient>
                            ),
                        }}
                    />

                </Tab.Navigator>
            </View>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabLabel: {
        fontSize: 12,
        fontWeight: '500',
    },
    gradientActiveBorder: {
        padding: 1,
        borderRadius: 999,
        alignSelf: 'center',
        marginHorizontal: 5,
        width: 63,
        height: 63,
        marginBottom: 30,
    },
    gradientBorder: {
        padding: 1,
        borderRadius: 999,
        alignSelf: 'center',
        marginHorizontal: 5,
        width: 50,
        height: 50,
        marginBottom: 30,
    },

    curveContainer: {
        position: 'absolute',
        bottom: 45, // Align it just above the navigation bar
        width: '100%',
        zIndex: 1,
    },
    curveBorder: {
        width: 880,
        height: 880,
        borderRadius: 440,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: -760, // 880 - 120 = 760 → only bottom curve peeks out
    },
    tabBar: {
        backgroundColor: 'black',
        height: 50,
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 10,
    },

});
