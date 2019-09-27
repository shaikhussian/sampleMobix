import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button
} from "native-base";
export default class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      detail: ""
    };
  }
  handleForm() {
    this.props.store.add({
      name: this.state.name,
      details: this.state.detail
    });
  }
  handleNameChange(e) {
    // alert("Name:" + e);
    this.setState({
      name: e
    });
  }
  handleDetailsChange(e) {
    // alert("Details:" + e);
    this.setState({
      detail: e
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="name"
                onChangeText={this.handleNameChange.bind(this)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="details"
                onChangeText={this.handleDetailsChange.bind(this)}
              />
            </Item>
            <Button onPress={this.handleForm.bind(this)}>
              <Text>Add</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
