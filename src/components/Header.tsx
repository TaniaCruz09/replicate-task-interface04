import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

export const Header = () => {
  return (
    <View style={styles.contentHeader}>
      <AntDesign name="arrowleft" size={24} color="black" />
      <Text style={styles.titleHeader}>Create a Task</Text>
      <Feather name="menu" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  contentHeader: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  titleHeader: {
    fontSize: 23,
    fontWeight: "bold",
  },
});
