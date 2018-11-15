import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View>
      <Text style={styles.headerStyle}>Auth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    alignItems: "center"
  },
  container: {
    height: 20
  }
});

export default Header;
