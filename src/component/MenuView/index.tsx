import React from 'react' 

// import {observer} from 'mobx-react'
import {Link} from 'react-router-dom'
import {Menu } from 'antd'
import {Icon } from '../index'

import menus from '../../constData/menus'
const {SubMenu} = Menu
// @observer
export default class MenuView extends React.Component{



    handleMenuClick = () => {}
    render(){
        return (
            // <div>
                <Menu theme='dark' mode='inline' onClick={this.handleMenuClick} style={{minHeight:'100%'}}>
                    {
                        menus.map((menu) => {

                            if(menu.children?.length === 0){
                                return (
                                    <Menu.Item key={menu.key} icon={menu.icon ? <Icon type={menu.icon} /> : ''}>
                                        <Link to={menu.key} >{menu.title}</Link>
                                    </Menu.Item>
                                )
                            }else{
                                return(
                                    <SubMenu
                                    key={menu.key}
                                    title={menu.title}
                                    icon={menu.icon ? <Icon type={menu.icon} /> : ''}
                                  >
                                    {
                                      menu.children?.map((_menu: any) => {
                                        return (
                                          <Menu.Item
                                            key={_menu.key}
                                            icon={_menu.icon ? <Icon type={_menu.icon} /> : ''}
                                          >{_menu.title}
                                           <Link to={_menu.key} >{_menu.title}</Link>
                                          </Menu.Item>
                                        )
                                      })
                                    }
                                  </SubMenu>
                                )
                            }







                        })
                    }
                </Menu>
            // </div>
        )
    }
}