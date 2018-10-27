import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { MyButton } from "./button";

const TodoItem = props => (
  <View
    style={{
      flexDirection: "column",
      paddingVertical: 16,
      paddingRight: 16,
      borderBottomWidth: 1,
      borderBottomColor: "black",
      marginLeft: 16,
      backgroundColor:
        props.ourStatus === 0
          ? "red"
          : props.ourStatus === 1
            ? "yellow"
            : "green"
    }}
  >
    <Text>{props.title}</Text>
    <View style={{ flexDirection: "row", marginTop: 16 }}>
      <MyButton
        title="Done"
        status={2}
        buttonPressed={st => {
          props.pressed(st);
        }}
      />
      <MyButton
        title="Processing"
        status={1}
        buttonPressed={st => {
          props.pressed(st);
        }}
      />
      <MyButton
        title="Not Done"
        status={0}
        buttonPressed={st => {
          props.pressed(st);
        }}
      />
      <MyButton
        title="Remove"
        status={-1}
        buttonPressed={st => {
          props.pressed(st);
        }}
      />
    </View>
  </View>
);

export default TodoItem;
