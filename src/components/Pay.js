import React from "react";
import emitter from "../utils/ev"
import { styles } from "./Pay.css";
class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          show:false
        }
      }
      
  render() {
    return (
     
   
        <div>
        <p/>
        <img  height="454" width="331" src={require("../assets/skm_weixin.jpg")} alt="qrcode_weixin"/>
        <img height="454" width="331" src={require("../assets/skm_alipay.jpg" )} alt="qrcode_alipay"/>
        </div>
     
  
     
    );
  }
}
export default Pay;