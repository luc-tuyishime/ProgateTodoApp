import React from "react";

import { TouchableOpacity, Text } from "react-native";

export const MyButton = props => (
  <TouchableOpacity
    style={[button, { marginRight: 16 }]}
    onPress={() => {
      props.buttonPressed(props.status);
    }}
  >
    <Text numberOfLines={1} ellipsizeMode="tail">
      {props.title}
    </Text>
  </TouchableOpacity>
);

const button = {
  backgroundColor: "#AAA",
  paddingVertical: 8,
  paddingHorizontal: 16,
  color: "#333",
  borderWidth: 1,
  borderColor: "#999",
  flex: 1
};
