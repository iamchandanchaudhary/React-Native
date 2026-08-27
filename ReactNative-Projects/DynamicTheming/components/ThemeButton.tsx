import { StyleSheet, Text, useColorScheme, View, Button } from 'react-native';
import React, { useState } from 'react';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkMode : styles.whiteMode}>
        Hello Chandan
      </Text>

      <Button title="Change Theme" onPress={() => setIsDarkMode(!isDarkMode)} />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "50%",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  whiteMode: {
    color: '#000',
    backgroundColor: '#fff'
  },
  darkMode: {
    color: '#fff',
    backgroundColor: '#000'
  }
})