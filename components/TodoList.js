import React from "react";
import { Button } from "native-base";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
// import Form from './Form';
const TodoList = ({ todo }) => {
  return (
    <View
      style={{
        height: 100,
        padding: 5,
        backgroundColor: "#969696",
        marginTop: 60
      }}
    >
      <View style={{ height: 60 }}>
        <Text>{todo.name}</Text>
        <View>
          <Text> {todo.details}</Text>
        </View>
      </View>
      <View>
        <Text>{todo.status()}</Text>
      </View>
      {!todo.is_done && (
        <Button onPress={todo.markDone}>
          <Text>Done</Text>
        </Button>
      )}
    </View>
  );
};

export default observer(TodoList);
