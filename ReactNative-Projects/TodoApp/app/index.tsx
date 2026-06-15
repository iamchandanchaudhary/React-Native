import DateSelector from "@/components/DateSelector";
import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import { TASKS } from "@/constants/Tasks";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Index() {

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />

      <FlatList
        data={TASKS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        ListHeaderComponent={
          <>
            {/* Header */}
            <Header />
            {/* DateSelector */}
            <DateSelector />
            {/* FiltersTabs */}
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingBottom: 24
  }
});