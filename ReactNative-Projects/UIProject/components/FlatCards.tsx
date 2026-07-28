import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.heading}>
                Flat Cards
            </Text>

            <View style={styles.flatCardBox}>
                <View style={[styles.container, styles.boxOne]}>
                    <Text style={[styles.flatBoxText, styles.boxOneText]}>
                        Red
                    </Text>
                </View>

                <View style={[styles.container, styles.boxTwo]}>
                    <Text style={[styles.flatBoxText, styles.boxTwoText]}>
                        Yellow
                    </Text>
                </View>

                <View style={[styles.container, styles.boxThree]}>
                    <Text style={[styles.flatBoxText, styles.boxThreeText]}>
                        Pink
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards;

const styles = StyleSheet.create({
    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
    },

    flatCardBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },

    container: {
        width: 100,
        height: 100,
        marginVertical: 10,
        padding: 8,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxOne: {
        backgroundColor: '#f00',
    },

    boxTwo: {
        backgroundColor: '#ff0',

    },

    boxThree: {
        backgroundColor: '#f0f',

    },

    flatBoxText: {
        fontWeight: 'medium',
    },

    boxOneText: {
        color: '#fff',
    },

    boxTwoText: {

    },

    boxThreeText: {
        color: '#fff',
    }
});