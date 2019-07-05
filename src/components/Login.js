import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Right,
  Content,
  Form,
  Item,
  Icon,
  Input
} from "native-base";
import { form } from "../assets/styles";
import { Actions } from "react-native-router-flux";
class Login extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#34495e" }}
          androidStatusBarColor="#34495e"
          iosBarStyle="light-content"
        >
          <Left>
            <Button transparent>
              <Text style={{ fontFamily: "IRANSansMobile", color: "white" }}>
                عضویت
              </Text>
            </Button>
          </Left>
          <Right>
            <Text style={{ fontFamily: "IRANSansMobile", color: "white" }}>
              صفحه ورود
            </Text>
          </Right>
        </Header>
        <Content>
          <Form style={form.form}>
            <Item rounded style={form.item} error>
              <Input placeholder="ایمیل" style={form.input} />
              <Icon active name="md-mail" />
            </Item>
            <Text style={form.error}>پر کردن این فیلد الزامی است!</Text>
            <Item rounded style={form.item} error>
              <Input placeholder="پسوورد" style={form.input} />
              <Icon active name="md-key" />
            </Item>
            <Text style={form.error}>پر کردن این فیلد الزامی است!</Text>

            <Button
              full
              style={form.submitButton}
              onPress={() => Actions.loginLightbox()}
            >
              <Text style={form.submitText}>ورود</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
