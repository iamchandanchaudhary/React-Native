import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from "yup";

// From Validation
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Should be min of 4 Character")
    .max(4, "Should be min of 4 Character")
    .required("Should be min of 4 Character")
})

const App = () => {

  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";

    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    let digitChars = "1234567890";
    let specialChars = "@!#$%^&*()-_+=";

    if (upperCaseChars) {
      characterList += upperCaseChars;
    }

    if (lowerCaseChars) {
      characterList += lowerCaseChars;
    }

    if (digitChars) {
      characterList += digitChars;
    }

    if (specialChars) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  }

  const createPassword = (charecters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const charecterIndex = Math.round(Math.random() * charecters.length)
      result += charecters.charAt(charecterIndex);
    }
    return result;
  }

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);

    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <View style={styles.container}>
      <Text>
        Hello Chandan
      </Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
  }
})