import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Layout } from "antd";
import Home from "./Home";
const { Sider, Content, Header } = Layout;
export default class Page extends React.Component {
  render() {
    console.log(process.env);

    return (
      <div>
        <Layout>
          <Sider>侧边</Sider>
          <Layout>
            <Header>dingskajdahdlkajkh</Header>
            <Content>内容</Content>
          </Layout>
        </Layout>

        {/* <Router>
        <Switch>
            <Route path='/home'  component={Home} exact />
        </Switch>
        </Router> */}
      </div>
    );
  }
}
