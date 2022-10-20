import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Header } from "../components/Header";
import { Colors } from "../components/Colors";
import { Button } from "../components/Button";

export const CreateTask = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#EBF5FB"
        barStyle="dark-content"
      />

      <Header />

      <View style={styles.contentNameStart}>
        <TextInput placeholder="Name" style={styles.textInput} />
        <View style={styles.contentInputs}>
          <View style={styles.textInputImg}>
            <Ionicons name="md-flag-outline" size={24} color="#82E0AA" />
            <TouchableOpacity style={styles.textInputChild}>
              <Text>Start Time</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textInputImg}>
            <Ionicons name="md-flag-outline" size={24} color="#82E0AA" />
            <TouchableOpacity style={styles.textInputChild}>
              <Text>End Time</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.contentTask}>
        <View style={styles.contentMultipleInputs}>
          <View
            style={[
              styles.textInputImg,
              { width: "100%", justifyContent: "space-between" },
            ]}
          >
            <TextInput
              placeholder="Task Category"
              style={[styles.textInputChild, { width: "90%" }]}
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#82E0AA"
            />
          </View>
          <View
            style={[
              styles.textInputImg,
              { width: "100%", justifyContent: "space-between", marginTop: 15 },
            ]}
          >
            <MaterialIcons name="person-add-alt" size={24} color="#82E0AA" />
            <TextInput
              placeholder="Colaborate With"
              style={[styles.textInputChild, { width: "90%" }]}
            />
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: 15 }]}
            editable
            maxLength={40}
            multiline
            numberOfLines={4}
            placeholder="Details"
          />
        </View>
        <Colors />
        <Button />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBF5FB",
  },
  contentNameStart: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D6DBDF",
    elevation: 1,
  },
  contentInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInputImg: {
    width: "49%",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D6DBDF",
  },
  textInputChild: {
    width: "80%",
    paddingVertical: 15,
    marginLeft: 10,
  },
  contentTask: {
    flex: 8,
    borderTopWidth: 2,
    borderColor: "#D6DBDF",
    backgroundColor: "#fff",
  },
  contentMultipleInputs: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
});
