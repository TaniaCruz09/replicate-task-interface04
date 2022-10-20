import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Button = () => {
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity>
        <Text style={styles.textButton}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
