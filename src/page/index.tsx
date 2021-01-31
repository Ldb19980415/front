import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import s from "./index.module.scss";
import MenuView from "../component/MenuView";
import useAntd from "./userAntd";
import { observer } from "mobx-react";
import ButtonUse from "./userAntd/ButtonUse";
import Header from './Header'
const routes = {
  "/home": Home,
  ...useAntd,
};

const appRouter = () => {
  return (
    <Router>
      <Switch>
        {Object.keys(routes).map((item: string) => (
          <Route path={item} key={item} component={routes[item]} exact />
        ))}
      </Switch>
    </Router>
  );
};
@observer
export default class Page extends React.Component {
  render() {
    return (
      <div className={s["container"]}>
        <Router>
          <div className={s["fixedHeader"]}>
          <Header/>
            
          </div>
          <div className={s["contentBox"]}>
            <div className={s["sider"]}>
              <MenuView />
            </div>
            <div className={s["content"]}>
              <Switch>
                <Route path="/home" key="home" component={Home} exact />
                <Route
                  path="/useAntd/useButton"
                  key="useButton"
                  component={ButtonUse}
                  exact
                />
                <Route path="/" key="home1" component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
