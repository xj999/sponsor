import React from "react";
import {Avatar} from "antd";
import emitter from "../utils/ev"
 
class PersonInfo extends React.Component {





    render(){
        return(
            <Avatar src={require("../assets/head.jpg")}/>
        );
    }


}
export default PersonInfo;