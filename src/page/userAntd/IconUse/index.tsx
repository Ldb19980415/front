import React from "react";

import s from "./index.module.scss";

interface Iprops {}

const data = [
  {
    title: "一种办法是使用antd提供的图标，一种办法是使用阿里巴巴矢量图标库提供的图标",
    children: [
      "使用antd提供的图标：import {IconName} from `@ant-design/icons`, <IconName />",
      "使用阿里巴巴矢量图标库提供的图标：详见本代码里面的Icon组件的使用。"
    ],
  },
  {
    title:"属性参数一览：",
    children:[
      "className:string  --> 设置图标的样式名。提供给它类名，就能提供类给它设置样式了。",
      "rotate:number  --> 图标旋转角度(IE9无效)",
      "spin:boolean  --> 是否有旋转动画",
      "style:css  --> 设置图标的样式。设置后为行间样式",
      "twoToneColor:string(16进制颜色) --> 仅适用双色图标。设置双色图标的主要颜色",
    ]
  },
  {
    title:'自定义Icon接受的属性：',
    children:[
      "className",
      "fill,svg的填充色",
      "height:string|number ,默认为1em",
      "style:css",
      "width:string|number,默认为1em  svg的宽度"
    ]
  }
];
export default class IconUse extends React.Component<any, any> {
  render() {
    return (
      <div className={s["container"]}>
        {data.map((item, index) => {
          if (item?.children?.length) {
            return(
              <>
              <h2 key={index}>{item.title}</h2>
              {
                item.children.map((context,idx) => <p key={idx}>{context}</p> )
              }
              </>
            ) 
          } else {
            return <h2 key={index}>{item.title}</h2>
          }
        })}
      </div>
    );
  }
}
