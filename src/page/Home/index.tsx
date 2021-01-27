import React from "react";
import { Button } from "antd";
import { inject, observer } from "mobx-react";

@inject("user")
@observer
export default class Home extends React.Component<any, any> {
  render() {
    console.log(this.props.user);
    return (
      <Button
        onClick={() => {
          this.props.user.logout();
        }}
      >
        改变专改
      </Button>
    );
  }
}
