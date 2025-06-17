import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Svg, { Path } from 'react-native-svg';

import { BadgePercentIcon } from 'lucide-react-native';
import { House } from 'lucide-react-native';
import { Maximize } from 'lucide-react-native';

import GinnieScreen from './GinnieScreen';
import YoloPayScreen from './YoloPayScreen';
import HomeScreen from './HomeScreen';

const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

// Component for the curved top border
const CurvedLine = () => {
    return (
        <Svg width={width} height={65}>
            <Path
                d={`M0,30 Q${width / 2},0 ${width},30`}
                stroke="#ccc"
                strokeWidth="2"
                fill="none"
            />
        </Svg>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.curveContainer}>
                <CurvedLine />
            </View>
            <Tab.Navigator
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
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <House
                                size={focused ? 40 : 24}
                                color={color}
                                style={{ marginBottom: 12 }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="YoloPay"
                    component={YoloPayScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Maximize
                                size={focused ? 40 : 24}
                                color={color}
                                style={{ marginBottom: 12 }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Ginie"
                    component={GinnieScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <BadgePercentIcon
                                size={focused ? 40 : 24}
                                color={color}
                                style={{ marginBottom: 12 }}
                            />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
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
    tabLabel: {
        fontSize: 12,
        fontWeight: '500',
    },
    curveContainer: {
        position: 'absolute',
        bottom: 20, // Align it just above the navigation bar
        width: '100%',
        zIndex: 1,
    },
});
