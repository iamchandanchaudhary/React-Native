import Navbar from '@/components/Navbar';
import React from 'react';
import { Text, View } from 'react-native';

const About = () => {
    return (
        <View>
            <Navbar />
            <Text style={{margin: 20}}>About</Text>
        </View>
    )
}

export default About;

