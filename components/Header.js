import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    backgroundColor: "red"
  }
});

export default Header;
