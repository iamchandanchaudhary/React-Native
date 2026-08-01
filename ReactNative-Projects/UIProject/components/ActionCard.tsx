import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react'

const ActionCard = () => {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Action Card</Text>

            <Text numberOfLines={4} style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam beatae, possimus voluptatum assumenda aspernatur
                eos saepe, animi odit magni odio provident, commodi expedita
                ex deserunt rerum fugit. Repellat, suscipit. Facere. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Beatae, doloremque.
            </Text>

            <View style={styles.buttonBox}>
                <TouchableOpacity
                    onPress={() => openWebsite("https://www.chandanchaudhary.in/")}
                    style={[styles.mainButton, styles.button1]}
                >
                    <Text style={styles.button1Text}>
                        View Portfolio
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => openWebsite("https://www.linkedin.com/in/chandan--chaudhary/")}
                    style={[styles.mainButton, styles.button2]}
                >
                    <Text style={styles.button2Text}>
                        LinkedIn
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 10,
    },
    heading: {
        color: '#003566',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraph: {
        color: '#000',
        textAlign: 'center',
    },
    buttonBox: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    mainButton: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        width: 120,
        borderRadius: 5,
    },
    button1: {
        backgroundColor: '#c1121f',
    },
    button1Text: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
    },
    button2: {
        backgroundColor: '#003566',
    },
    button2Text: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
    },
});
