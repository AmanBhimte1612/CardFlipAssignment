import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import SnowFlakeButton from '../components/SnowFlakeButton';
import Button from '../components/Button';
import SnowFlakeButton from '../components/SnowFlakeButton';
import Card from '../components/Card';

export default function YoloPayScreen() {
    const [isCardFlipped, setIsCardFlipped] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Select Payment Mode</Text>
                <Text style={styles.subtitle}>
                    Choose your preferred payment method to make payment.
                </Text>

                {/* Toggle Buttons */}
                <View style={styles.toggleContainer}>
                    <Button title="Pay" />
                    <Button title="Card" bordercolor1="#ff0000" />
                </View>

                {/* Label */}
                <Text style={styles.cardLabel}>YOUR DIGITAL DEBIT CARD</Text>

                <View style={styles.cardSection}>
                    <Card toggle={isCardFlipped} />
                    <View style={styles.freezeSection}>
                        <SnowFlakeButton onToggle={(flipped) => {
                            setIsCardFlipped(flipped);
                            console.log(`Card flipped state updated: ${flipped}`);
                        }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 24,
        paddingTop: 38,
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 16,
    },
    subtitle: {
        color: '#aaa',
        marginBottom: 16,
        fontSize: 16,
    },
    toggleContainer: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    cardLabel: {
        color: '#535353',
        fontSize: 15,
    },


    cardSection: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 4,
        paddingVertical: 20,
        position: 'relative',
    },
    freezeSection: {
        alignItems: 'center',
        position: 'absolute',
        right: 90,
        top: 90,
        justifyContent: 'center',
        marginLeft: 16,
    },



    card: {
        width: 240,
        height: 180,
        backgroundColor: '#111',
        borderRadius: 16,
        padding: 16,
        borderColor: '#333',
        borderWidth: 1,
        position: 'relative',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    yoloLogo: {
        width: 40,
        height: 20,
    },
    bankLogo: {
        width: 40,
        height: 20,
    },
    cardNumber: {
        color: '#fff',
        marginTop: 16,
        fontSize: 16,
        fontFamily: 'monospace',
        lineHeight: 22,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    footerLabel: {
        color: '#888',
        fontSize: 10,
    },
    footerValue: {
        color: '#fff',
        fontSize: 12,
    },
    cvvRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    copyDetails: {
        position: 'absolute',
        bottom: 8,
        left: 16,
    },
    copyText: {
        color: '#f00',
        fontSize: 12,
    },
    rupayLogo: {
        position: 'absolute',
        bottom: 8,
        right: 16,
        width: 60,
        height: 20,
    },

});

