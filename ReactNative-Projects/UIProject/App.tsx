import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView
} from 'react-native'

import React from 'react'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />

        <FancyCard />
        <FancyCard />
        <FancyCard />

        <ContactList />

        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    display: 'flex',
    backgroundColor: '#000',
    padding: 8,
  },

});