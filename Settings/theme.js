import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        onValueChange = {props.id}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
  
  export default Theme;