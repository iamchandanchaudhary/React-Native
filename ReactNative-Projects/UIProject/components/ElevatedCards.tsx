import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.heading}>
                Elevated Cards
            </Text>

            <ScrollView horizontal={true} style={styles.elevatedCardBox}>
                <View style={[styles.container, styles.boxOne]}>
                    <Text style={[styles.elevatedBoxText, styles.boxOneText]}>
                        Hello,
                    </Text>
                </View>

                <View style={[styles.container, styles.boxTwo]}>
                    <Text style={[styles.elevatedBoxText, styles.boxTwoText]}>
                        Chandan
                    </Text>
                </View>

                <View style={[styles.container, styles.boxThree]}>
                    <Text style={[styles.elevatedBoxText, styles.boxThreeText]}>
                        this
                    </Text>
                </View>

                <View style={[styles.container, styles.boxFour]}>
                    <Text style={[styles.elevatedBoxText, styles.boxFourText]}>
                        is
                    </Text>
                </View>

                <View style={[styles.container, styles.boxFive]}>
                    <Text style={[styles.elevatedBoxText, styles.boxFiveText]}>
                        Horizontal
                    </Text>
                </View>

                <View style={[styles.container, styles.boxSix]}>
                    <Text style={[styles.elevatedBoxText, styles.boxSixText]}>
                        Scroll
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCards;

const styles = StyleSheet.create({
    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
    },

    elevatedCardBox: {
        display: 'flex',
        gap: 10,
        marginTop: 5,

        elevation: 4,
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2,

        shadowOffset: {
            width: 1,
            height: 1,
        }
    },

    container: {
        backgroundColor: 'rgb(0, 221, 255)',
        width: 100,
        height: 100,
        padding: 8,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },

    elevatedBoxText: {
        fontSize: 10,
        fontWeight: 'bold',
    },

    boxOne: {

    },

    boxTwo: {

    },

    boxThree: {

    },

    boxFour: {

    },

    boxFive: {

    },

    boxSix: {

    },

    boxOneText: {

    },

    boxTwoText: {

    },

    boxThreeText: {

    },

    boxFourText: {

    },

    boxFiveText: {

    },

    boxSixText: {

    },
});