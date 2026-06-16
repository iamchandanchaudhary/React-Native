import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Navbar = () => {
    const router = useRouter();

    return (
        <View style={styles.navbar}>

            <Button
                title="Home"
                onPress={() => router.push('/profile')}
            />

            <Button
                title="Profile"
                onPress={() => router.push('/profile')}
            />

            <Button
                title="About"
                onPress={() => router.push('/about')}
            />
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbar: {
         marginTop: 50,
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        justifyContent: "space-around"
    }
})