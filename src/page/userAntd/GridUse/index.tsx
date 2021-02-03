import React from "react";
import s from "./index.module.scss";
interface Iprops {}

const data = [
  {
    title: "Grid栅格",
    children: [
      "24栅格系统",
    ],
  },
  {
    title:'我自己的一些理解',
    children:[
      "其底层是用flex布局来实现的，在用它之前学习过flex布局会比较容易。",
      "它主要就是把我们对flex布局的常用功能给封装成了组件，方便使用。"
    ]
  },
  {
    
  }

];
export default class GridUse extends React.Component<any, any> {
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
