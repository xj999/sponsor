import React from "react";
import {Button,Avatar} from "antd";
import emitter from "../utils/ev"
import Pay from "./Pay";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showPay: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
 

  this.setState({
    showPay:!this.state.showPay
  });
  emitter.emit("show",this.state.showPay);
}


  render() {
    
    return (
      <div>
        <h2>一台2018款MacBook Pro 15寸</h2>
        <h2>一个BOSE QC35二代 </h2>
        {this.state.showPay}
        <Button type="primary" onClick={this.handleClick}> {this.state.showPay ? '不要赞助' : '赞助一下'}</Button>
        {this.state.showPay  && <Pay />}
        <p />
      </div>
    );
  }
}
export default Home;