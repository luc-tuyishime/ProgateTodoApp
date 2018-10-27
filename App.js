import React from "react";

import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";

import KeyboardSpacer from "react-native-keyboard-spacer";

import TodoItem from "./components/TodoItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: "",
      todoList: [
        {
          title: "Go shopping",
          status: 0 // 0 - not done, 1 - processing, 2 - done
        },
        {
          title: "Read a book",
          status: 0 // 0 - not done, 1 - processing, 2 - done
        },
        {
          title: "Eat",
          status: 0 // 0 - not done, 1 - processing, 2 - done
        }
      ]
    };
  }

  render() {
    console.log(this.state.todoList);

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 64,
            backgroundColor: "blue",
            paddingHorizontal: 16,
            paddingTop: 32
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Todo App
          </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flexDirection: "column" }}>
            {this.state.todoList.map((item, index) => (
              <TodoItem
                title={item.title}
                ourStatus={item.status}
                pressed={stat => {
                  let todoList = [...this.state.todoList];

                  if (stat === -1) {
                    todoList.splice(index, 1);
                  } else {
                    todoList[index].status = stat;
                  }
                  this.setState({ todoList: todoList });
                }}
              />
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: "#CCC",
            paddingBottom: 20,
            flexDirection: "row"
          }}
        >
          <TextInput
            value={this.state.textContent}
            placeholder="New item..."
            style={{ padding: 16, flex: 1 }}
            onChangeText={text => {
              this.setState({ textContent: text });
            }}
          />
          {this.state.textContent.length !== 0 && (
            <TouchableOpacity
              style={{ backgroundColor: "blue" }}
              onPress={() => {
                let todoList = [...this.state.todoList];

                todoList.push({
                  title: this.state.textContent,
                  status: 0 // 0 - not done, 1 - processing, 2 - done
                });

                this.setState({ todoList: todoList, textContent: "" });
              }}
            >
              <Text style={{ color: "white" }}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
        <KeyboardSpacer />
      </View>
    );
  }
}

export default App;
