import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react'

const ActionCard = () => {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View>
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
                    onPress={() => openWebsite("https://www.chandanchaudhary.in/")}
                    style={[styles.mainButton, styles.button2]}
                >
                    <Text style={styles.button2Text}>
                        Instagram
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    paragraph: {
        color: '#fff',
    },
    buttonBox: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    mainButton: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        width: 120,
        borderRadius: 5,
    },
    button1: {
        backgroundColor: '#ff0',
    },
    button1Text: {
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
    },
    button2: {
        backgroundColor: '#f0f',
    },
    button2Text: {
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
    },
});
