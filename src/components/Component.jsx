import React from "react";
class ToggleButton extends React.Component {
  state = {
    isShow: false,
  };

  toggle = () => {
    this.setState((prev) => {
      return { isShow: !prev.isShow };
    });
  };

  render() {
    console.log("state", this.state);
    return (
      <div>
        <button onClick={this.toggle}>Change</button>
        <h2>{this.state.isShow ? "10000000000" : "20000000"}</h2>
      </div>
    );
  }
}
export default ToggleButton;
// 