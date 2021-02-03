import React from "react";
import s from "./index.module.scss";
interface Iprops {}

const data = [
  {
    title: "Divider分割线",
    children: [
      "区隔内容的分割线。",
      "就类似于自己写了个border-botom(功能比border-bottom丰富些)"
    ],
  },
  {
    title:"可设置属性:",
    children:[
      "className:string -->分割线样式类",
      "dashed:boolean  --> 是否为虚线",
      "orientation:left|center|right  --> 分割线标题的位置",
      "plain:boolean  --> 文字是否显示为普通正文样式",
      "style:  -->分割线样式对象",
      "type:horizontal|vertical  --> 水平还是垂直类型"
    ]
  }
];
export default class DividerUse extends React.Component<any, any> {
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
