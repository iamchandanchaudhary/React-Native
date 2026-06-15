import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput
} from "react-native";

function Index() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const pressMe = () => {
    Alert.alert("Button Pressed");
  }

  const longPressMe = () => {
    Alert.alert("Long Button Pressed");
  }

  const [value, setValue] = useState('');

  return (
    // View => Used for making a Conrainer (Like: <div>)
    // <View>

    // ScrollView => Enable Scroll Method (Work like View)
    <ScrollView>

      {/* Text used to => Store String Values or Paragraph (like: <p>, <span>) */}
      <Text>Hello Chandan ✨</Text>

      {/* Add Button like React.js but some attributes are different */}
      <Button
        title="Click me Now"
        onPress={pressMe}
      />

      {/* React Native have Special Switch (Renders a boolean input) */}
      <Switch value={isEnabled} onValueChange={toggleSwitch} />

      {/* TextInput use to take input, some attributes are different (Like: <input/>) */}
      <TextInput
        keyboardType="default"
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1, margin: 12 }}
        placeholder="Enter Name"
      />

      <TextInput
        keyboardType="phone-pad"
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1, margin: 12 }}
        placeholder="Enter Number"
      />

      {/* TextArea - There is no such TextArea Component is present, We simply make TaxtInput into TextArea using some attributes */}
      <TextInput
        keyboardType="default"
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1, margin: 12 }}
        placeholder="Description"
        multiline
        numberOfLines={5}
      />

      {/* Pressable - used to set press/click mode on text (events are also aviable) */}
      <Pressable onPress={pressMe} onLongPress={longPressMe}>
        <Text style={{ margin: 12 }}>
          I'm Pressable
        </Text>
      </Pressable>

      {/* Image Component */}
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png"
        }}

        style={{ height: 100, width: 100, margin: 10 }}
      />


      {/* Used to see the use of ScrollView */}
      {[...Array(30)].map((_, i) => (
        <Text key={i}>Chandan Chaudhary {i + 1}</Text>
      ))}
    </ScrollView>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

export default Index;

// onLongPress
// onPressIn
// onPressOut