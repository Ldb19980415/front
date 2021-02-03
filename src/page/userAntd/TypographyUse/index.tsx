import React from "react";
import {Typography} from 'antd'
import s from "./index.module.scss";



const {Title} = Typography

interface Iprops {}

const data = [
  {
    title: "Typography排版",
    children: [
      "文本的基本格式。",
    ],
  },
  {
    title:'何时适用：',
    children:[
      "当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。",
      "当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。",
      "给我的感觉就是它主要是把平时我们对文本的常用功能抽离出来形成带功能的组件，方便适用。"
    ]
  },
  {
    title:"title的使用：",
    children : [
      "import {Typography} from `antd` ",
      "const {Title} = Typography",
      "<Title>标题的内容</Title>",
      "可用属性：",
      "code:boolean  --> 添加代码样式",
      "copyable:boolean|自定义设置 --> 是否可拷贝，为对象时进行各种自定义。",
      "delete:boolean --> 添加删除样式线",
      "editable:boolean|editable --> 是否可编辑，为对象时可对编辑进行控制",
      "ellipsis:boolean|ellipsis --> 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等",
      "level:number[1,2,3,4,5] --> 重要程度，相当于h1、h2、h3、h4、h5",
      "mark:boolean --> 添加标记样式,我试了一下，大概就是文本被加了背景色以标记",
      "type:secondary(灰色)|success(绿色)|warning(橙色)|danger(红色)",
      "underline:boolean  --> 添加下划线样式",
      "onChange:Function  (string)=> -->用户提交编辑内容时触发"
    ]
  },
  {
    title:"Text的使用：",
    children : [
      "import {Typography} from `antd` ",
      "const {Text} = Typography",
      "<Text>文本的内容</Text>",
      "可用属性：",
      "code:boolean  --> 添加代码样式",
      "copyable:boolean|自定义设置 --> 是否可拷贝，为对象时进行各种自定义。",
      "delete:boolean --> 添加删除样式线",
      "editable:boolean|editable --> 是否可编辑，为对象时可对编辑进行控制",
      "ellipsis:boolean|ellipsis --> 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等",
      "keyboard:boolean --> 添加键盘样式",
      "mark:boolean --> 添加标记样式,我试了一下，大概就是文本被加了背景色以标记",
      "type:secondary(灰色)|success(绿色)|warning(橙色)|danger(红色)",
      "underline:boolean  --> 添加下划线样式"
    ]
  },
  {
    title:"Paragraph的使用：",
    children : [
      "import {Typography} from `antd` ",
      "const {Paragraph} = Typography",
      "<Paragraph>Paragraph的内容</Paragraph>",
      "可用属性：",
      "code:boolean  --> 添加代码样式",
      "copyable:boolean|自定义设置 --> 是否可拷贝，为对象时进行各种自定义。",
      "delete:boolean --> 添加删除样式线",
      "editable:boolean|editable --> 是否可编辑，为对象时可对编辑进行控制",
      "ellipsis:boolean|ellipsis --> 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等",
      "keyboard:boolean --> 添加键盘样式",
      "mark:boolean --> 添加标记样式,我试了一下，大概就是文本被加了背景色以标记",
      "type:secondary(灰色)|success(绿色)|warning(橙色)|danger(红色)",
      "underline:boolean  --> 添加下划线样式",
      "strong:boolean --> 是否加粗",
      "onChange:Function  (string)=> -->用户提交编辑内容时触发"
    ]
  }
  
];
export default class IconUse extends React.Component<any, any> {
  render() {
    return (
      <div className={s["container"]}>
        <Title code={true}>code属性为true的时候的状态 var a = 10</Title>
        <Title code={false} mark={false}>code属性为false的时候的状态,那就是普通标题，默认等级为h1： var a = 10</Title>

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
