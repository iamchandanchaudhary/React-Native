import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.heading}>
                India Gate
            </Text>

            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: "https://i.pinimg.com/736x/2c/d3/4e/2cd34eee7b05a04e5c03ded73d394e3f.jpg"
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.imageDetails}>
                    <Text style={styles.title}>
                        India Gate
                    </Text>
                    <Text style={styles.description}>
                        India Gate, formerly known as the All India War Memorial,
                        is a prominent war memorial situated on the eastern edge
                        of the ceremonial axis of New Delhi, India, officially known
                        as Kartavya Path.
                    </Text>
                    <Text style={styles.label}>
                        New Delhi, India
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard;

const styles = StyleSheet.create({
    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    imageContainer: {
        // width: 250,
        backgroundColor: '#fff',
        padding: 4,
        borderRadius: 10,
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
    },
    imageDetails: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    cardImage: {
        height: 200,
        width: 200,
        objectFit: 'contain',
        marginTop: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center'
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
    }
});