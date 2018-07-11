import React, { Component } from "react";
import "../../App.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { connect } from "react-redux";
import ListChats from "../../components/ListChat";
import NavBar from "../../components/NavBar";

class Home extends Component {
  
  render() {
    const { messages } = this.props;
    return (
      <div className="container">
        <NavBar />
        <div className="flex-container">
          <ListChats messages={messages} />
        </div>
        <div className="navigation-bottom">
          <Input />
          <Button name="Send" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state
});

export default connect(
  mapStateToProps,
  null
)(Home);
