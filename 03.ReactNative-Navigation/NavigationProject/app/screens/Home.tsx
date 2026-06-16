import Navbar from '@/components/Navbar';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
    const router = useRouter();

    return (
        <View style={{display: "flex", gap: 10}}>
            <Navbar />
            <Text style={{margin: 20}}>Home Screen</Text>
        </View>
    )
}

export default Home;

