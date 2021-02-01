import React from "react";

// import {observer} from 'mobx-react'
import { Link, withRouter } from "react-router-dom";
import menus from "../../constData/menus";
import { Menu } from "antd";
import { Icon, IconTypes } from "../../component";
const { SubMenu } = Menu;
// @observer
export default class MenuView extends React.Component {
  render() {
    return (
      <div>
        <Menu theme="dark" mode="inline" selectedKeys={[]}>
          {menus.map((menu: any) => {
            if (menu.children?.length === 0) {
              return (
                <Menu.Item
                  key={menu.key}
                  icon={menu.icon ? <Icon type={menu.icon} /> : ""}
                >
                  <Link to={menu.key}>{menu.title}</Link>
                </Menu.Item>
              );
            } else {
              return (
                <SubMenu
                  key={menu.key}
                  title={menu.title}
                  icon={menu.icon ? <Icon type={menu.icon} /> : ""}
                >
                  {menu.children?.map((_menu: any) => {
                    return (
                      <Menu.Item
                        key={_menu.key}
                        icon={_menu.icon ? <Icon type={_menu.icon} /> : ""}
                      >
                        <Link to={_menu.key}>{_menu.title}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            }
          })}
        </Menu>
      </div>
    );
  }
}
