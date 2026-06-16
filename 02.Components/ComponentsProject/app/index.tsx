import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import ImageBackgroundComponent from "./ImageBackground";

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
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(value);
    setValue('');
  }

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];


  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

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
        // value={value}
        // onChangeText={setValue}
        style={{ borderWidth: 1, margin: 12 }}
        placeholder="Enter Number"
      />

      {/* TextArea - There is no such TextArea Component is present, We simply make TaxtInput into TextArea using some attributes */}
      <TextInput
        keyboardType="default"
        // value={value}
        // onChangeText={setValue}
        style={{ borderWidth: 1, margin: 12 }}
        placeholder="Description"
        multiline
        numberOfLines={5}
        // readOnly
      />

      <Button title="Submit" onPress={handleSubmit}/>
      <Text style={{marginTop: 10}}>Input Name: {submittedText ? submittedText : null}</Text>

      {/* Pressable - used to set press/click mode on text (events are also aviable) */}
      <Pressable onPress={pressMe} onLongPress={longPressMe}>
        <Text style={{ margin: 12 }}>
          I'm Pressable
        </Text>
      </Pressable>

      {/* Image Component */}
      <Image
        source={{
          uri: "https://res.cloudinary.com/chandanchaudhary/image/upload/v1776841320/profile_pictures/wd8yzkulcge6whac4ywv.png"
        }}

        style={{ height: 100, width: 100, margin: 10 }}
      />


      {/* Used to see the use of ScrollView */}
      {/* {[...Array(30)].map((_, i) => (
        <Text key={i}>Chandan Chaudhary {i + 1}</Text>
      ))} */}

      {/* Wrong Method ❌ (Take High memory) */}
      {/* {DATA.map((item, index) => (
        <Text key={index}>{item.title}</Text>
      ))} */}

      {/* SafeAreaView save from Overlap */}
      <SafeAreaView>
        {/* FlatList is Used to render the list of Value (better then Map) */}
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />

        {/* Another Way */}
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item title={item.title} />}
          horizontal
        />
      </SafeAreaView>

      {/* For Background Image */}
      <ImageBackgroundComponent />
    </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    backgroundColor: '#111',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#fff',
  },
});

export default Index;

// onLongPress
// onPressIn
// onPressOut