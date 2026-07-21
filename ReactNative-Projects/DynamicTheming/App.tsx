import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Switch,
  StyleSheet,
} from "react-native";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.containerPro,
        {
          backgroundColor: darkMode ? "#121212" : "#F5F5F5",
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: darkMode ? "#FFFFFF" : "#000000",
          },
        ]}
      >
        Dark / Light Mode
      </Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor: darkMode ? "#1E1E1E" : "#FFFFFF",
          },
        ]}
      >
        <Text
          style={{
            color: darkMode ? "#FFFFFF" : "#000000",
            fontSize: 18,
          }}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Text>

        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerPro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "30%",
    // marginTop: 100,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  card: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
  },
});