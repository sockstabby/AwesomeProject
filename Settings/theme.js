import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { useStateValue } from '../state.js';

const styles = StyleSheet.create({
    container: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
      width: '48%',
      height: 200,
      paddingBottom: '60%',
    }
  });

const Theme = (props) => {
  const [{ darkThemeEnabled}, dispatch] = useStateValue();
  const toggleSwitch = () => dispatch({ type: 'darkThemeEnabledChanged', value: !darkThemeEnabled });

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={darkThemeEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={darkThemeEnabled}
      />
    </View>
  );
}
  
  export default Theme;