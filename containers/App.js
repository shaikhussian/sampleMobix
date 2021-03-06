/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import { Header, Colors } from "react-native/Libraries/NewAppScreen";
import { observer, inject } from "mobx-react";
import TodoList from "../components/TodoList";
import Form from "../components/Form";

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <View>
              <Text>Make a new To do</Text>
              <Form store={store} />
            </View>
            <View style={{ marginTop: -600 }}>
              {store.Todo.map((todo, i) => (
                <TodoList todo={todo} key={i} />
              ))}
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default inject("store")(observer(App));
