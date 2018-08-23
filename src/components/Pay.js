import React from "react";
import { Skm_weixin } from "../assets/skm_weixin.jpg"; 
import { Skm_alipay } from "../assets/skm_alipay.jpg"; 
import { styles } from "./Pay.css";
class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
      }
  render() {
    return (
      <div>
      <img className={styles.alipay} height="454" width="331" src={Skm_weixin}/>
      <img height="454" width="331" src={Skm_alipay}/>
      </div>
    );
  }
}
export default Pay;