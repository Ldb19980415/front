import {  Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import s from "./index.module.scss";
import MenuView from "../component/MenuView";
import useAntd from "./userAntd";
import { observer } from "mobx-react";
import Header from "./Header";
import game from "./game";
import d3Learn from "./d3Learn";
import useHook from "./useHook";
import other from "./other";
import RecordWeight from './RecordWeight'
import {browserHistory} from './browserHistory'
const routes = {
  "/home": Home,
  '/sunjie':RecordWeight,
  ...useAntd,
  ...game,
  ...d3Learn,
  ...useHook,
  ...other
};

const appRouter = () => {
  return (
    <Switch>
      {Object.keys(routes).map((item: string) => (
        <Route path={item} key={item} component={routes[item]} exact />
      ))}
      <Route path="/" key="allTo" component={Home} />
    </Switch>
  );
};
@observer
export default class Page extends React.Component {
  render() {
    return (
      <div className={s["container"]}>
        <Router history={browserHistory}>
          <div className={s["fixedHeader"]}>
            <Header />
          </div>
          <div className={s["contentBox"]}>
            <div className={s["sider"]}>
              <MenuView />
            </div>
            <div className={s["content"]}>{appRouter()}</div>
          </div>
        </Router>
      </div>
    );
  }
}
