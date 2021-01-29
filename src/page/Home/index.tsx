import React from "react";
import { Button } from "antd";
import { inject, observer } from "mobx-react";

@inject("user")
@observer
export default class Home extends React.Component<any, any> {
  componentDidMount(){
  }
  render() {
    return (
      <Button
        onClick={() => {
          console.log('.....');
          
          this.props.user.logout();
        }}
      >
        改变专改
      </Button>
    );
  }
}
