import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Header, Right, Content, Button } from "native-base";
import { form } from "../assets/styles";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#34495e" }}
          androidStatusBarColor="#34495e"
          iosBarStyle="light-content"
        >
          <Right>
            <Text style={{ fontFamily: "IRANSansMobile", color: "white" }}>
              صفحه اصلی
            </Text>
          </Right>
        </Header>
        <Content>
          <Button
            full
            style={[
              form.submitButton,
              { marginTop: 20, marginLeft: 15, marginRight: 15 }
            ]}
          >
            <Text style={form.submitText}>خروج</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Home;
