import React from "react";
import { StyleSheet, View } from "react-native";

export const Colors = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});
