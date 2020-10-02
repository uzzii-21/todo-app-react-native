import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedbac, Keyboard, TouchableWithoutFeedback } from "react-native";
import AddTodos from "./Components/AddTodos";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((preTodos)=> {
      return preTodos.filter(todo => todo.key != key)
    })
  }
  const submitHandler = (text) => {
    if (text.length > 3){
    setTodos((preTodo) => {
      return [
        {text:text, key: Math.random().toString()},
        ...preTodo
      ]
    })
   }
   else{
      Alert.alert("OOPS!", "Todos must be over three chars long",[
        {text: 'Understood', onPress: () => console.log("Alert Closed") }
      ])
   }
  }
  return (
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
    console.log("Dismissed keyboard")
  }}>
    <View style={style.container}>
      {/* Header */}
      <Header />
      <View style={style.content}>
        {/* To Do Form */}
        <AddTodos submitHandler={submitHandler} />
        <View style={style.list}>
          {/* Show To Do */}
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  </TouchableWithoutFeedback>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
