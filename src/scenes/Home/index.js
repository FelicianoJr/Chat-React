import React, { Component } from "react";
import "../../App.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { connect } from "react-redux";
import ListChats from "../../components/ListChat";
import NavBar from "../../components/NavBar";
import { sendMsg } from "../../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.sendClick = this.sendClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  sendClick(e) {
    e.preventDefault();
    const { sendMsg } = this.props;
    if (this.state.value) {
      const msg = { name: "you", messages: this.state.value, icon: "" };
      sendMsg(msg);
    }
    this.setState({ value: "" });
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="container">
        <NavBar />
        <div className="flex-container">
          <ListChats messages={messages} />
        </div>
        <form onSubmit={this.sendClick} className="navigation-bottom">
          <Input value={this.state.value} onChange={this.handleChange} />
          <Button name="Send" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state
});

const mapDispatchToProps = {
  sendMsg
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
