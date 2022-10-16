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
import {
  AntDesign,
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

export const CreateTask = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#EBF5FB"
        barStyle="dark-content"
      />
      <View style={styles.contentHeader}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={styles.titleHeader}>Create a Task</Text>
        <Feather name="menu" size={24} color="black" />
      </View>
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
        <View style={styles.contentColors}>
          <View style={styles.circle}>
            <View style={styles.selectCircle}></View>
          </View>
          <View style={[styles.circle, { backgroundColor: "#00394C" }]}></View>
          <View style={[styles.circle, { backgroundColor: "#004E8E" }]}></View>
          <View style={[styles.circle, { backgroundColor: "#26BFBF" }]}></View>
          <View style={[styles.circle, { backgroundColor: "#57E597" }]}></View>
          <View style={[styles.circle, { backgroundColor: "#FF7A7B" }]}></View>
          <View style={[styles.circle, { backgroundColor: "#FFB017" }]}></View>
          <View style={[styles.circle, { backgroundColor: "#E48FFF" }]}></View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity>
            <Text style={styles.textButton}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBF5FB",
  },
  contentHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  titleHeader: {
    fontSize: 23,
    fontWeight: "bold",
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
  contentColors: {
    flexDirection: "row",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingVertical: 20,
    borderColor: "#D6DBDF",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: "#2FD1C5",
    marginHorizontal: 7,
  },
  selectCircle: {
    borderRadius: 100,
    width: 20,
    height: 20,
    backgroundColor: "#fff",
  },
  containerButton: {
    alignSelf: "center",
    justifyContent: "center",
    margin: "20%",
    backgroundColor: "#2FD1C5",
    borderRadius: 10,
    width: 300,
    height: 70,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
