import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    bordercolor1?: string;
    bordercolor2?: string;
    onToggle?: () => void;
    title?: string;
    // titlecolor?: string;
};

export default function CardButton({
    bordercolor1 = '#ffffff',
    bordercolor2 = '#111111',
    onToggle,
    title = 'card',
}: Props) {
    return (
        <LinearGradient
            colors={[bordercolor1, bordercolor2]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradientBorder}
        >
            <TouchableOpacity style={styles.innerButton} activeOpacity={0.8} onPress={onToggle}>
                <Text style={[styles.cardText, { color: bordercolor1 }]}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientBorder: {
        padding: 1.5,
        borderRadius: 999,
        alignSelf: 'center',
        marginHorizontal: 5,
        width : 101    
    },
    innerButton: {
        backgroundColor: '#000000',
        borderRadius: 999,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width : 98
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'lowercase',
    },
});
