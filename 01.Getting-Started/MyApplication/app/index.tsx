import { useState } from "react";
import { Alert, Button, Switch, Text, View } from "react-native";


function Index() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const pressMe = () => {
    Alert.alert("Button Pressed");
  }

  return (
    <View>
      <Text>Hello Chandan ✨</Text>
      <Button title="Click me Now" onPress={pressMe} />
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
    </View>
  );
}

export default Index;