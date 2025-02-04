/* eslint-disable no-script-url */

import React from "react";
import Title from "./Title";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import Switch from "@material-ui/core/Switch";
import superagent from "superagent"
//import axios from "axios";
const axios = require('axios').default;

class SwitchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchState: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  async postData(url, data) {
   /*  await fetch(url, {
      method: "POST",
      mode: "no-cors",
      withCredentials: true,
      credentials: "same-origin",
      headers: {
        
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1ZTZhMzU4ZjBjM2Y0ZjQ5YWM0YjkyNDdlMDBjZDFkNSIsImlhdCI6MTU3MTA5Mzc4MSwiZXhwIjoxODg2NDUzNzgxfQ.lqmPlq0tTX_6MKoFSJQIzzjFaF9xZTtwNhOOHrJkdMA",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }); */
    //axios.post(url, data);
    axios({
      method: 'post',
      url: url,
      data: data,
      mode: 'no-cors',
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1ZTZhMzU4ZjBjM2Y0ZjQ5YWM0YjkyNDdlMDBjZDFkNSIsImlhdCI6MTU3MTA5Mzc4MSwiZXhwIjoxODg2NDUzNzgxfQ.lqmPlq0tTX_6MKoFSJQIzzjFaF9xZTtwNhOOHrJkdMA',
        
      }

    })

  }

  async handleToggle() {
    this.setState({
      switchState: !this.state.switchState
    });
    await this.postData(
      `https://demo.nt.t-bond.hu/api/states/${this.props.entityID}`,
      { status: this.state.switchState ? "off" : "on" }
    );
    //const url = `https://demo.nt.t-bond.hu/api/states/${this.props.entityID}`;
  }

  /* componentWillMount(){
    const url = `https://demo.nt.t-bond.hu/api/states/${this.props.entityID}`;
    const respone = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1ZTZhMzU4ZjBjM2Y0ZjQ5YWM0YjkyNDdlMDBjZDFkNSIsImlhdCI6MTU3MTA5Mzc4MSwiZXhwIjoxODg2NDUzNzgxfQ.lqmPlq0tTX_6MKoFSJQIzzjFaF9xZTtwNhOOHrJkdMA'
      }
    }).then(res => res.json())
      .then(data => {
        if(data.state === 'on'){
          this.setState({
            switchState : true
          })
        }
      })
    
  } */

  render() {
    return (
      <React.Fragment>
        {/* <Title>Group Name</Title> */}
        <List>
          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText
              id="switch-list-label-example"
              primary={this.props.labelText}
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={this.handleToggle}
                checked={this.state.switchState}
                inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
export default SwitchCard;
