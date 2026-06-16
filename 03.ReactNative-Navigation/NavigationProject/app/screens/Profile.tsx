import Navbar from '@/components/Navbar';
import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
    return (
        <View>
            <Navbar />
            <Text style={{margin: 20}}>Profile</Text>
        </View>
    )
}

export default Profile;

