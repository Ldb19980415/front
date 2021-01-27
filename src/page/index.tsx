import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Layout } from "antd";
import Home from "./Home";
import { Icon,IconTypes } from "../component";
import s from "./index.module.scss";
export default class Page extends React.Component {
  render() {
    return (
      <div className={s["container"]}>
        <div className={s["fixedHeader"]}><Icon size={40} type={IconTypes.iconcash}/></div>
        <div className={s["contentBox"]}>
          <div className={s["sider"]}></div>
          <div className={s["content"]}></div>
        </div>
      </div>
    );
  }
}
