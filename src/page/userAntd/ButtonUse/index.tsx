import React from "react";

import s from "./index.module.scss";

interface Iprops {}

const data = [
  {
    title: "四种状态：",
    children: [
      "危险：删除/移动/修改权限等危险操作，一般需要二次确认。",
      "禁用：行动点不可用的时候，一般需要文案解释。",
      "幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。",
      "加载中：用于异步操作等待反馈的时候，也可以避免多次提交。",
    ],
  },
  {
    title: "使用：import {Button} from `antd`",
  },
  {
    title: "属性说明：",
    children: [
      "block:boolean --> 由行间块状元素变成块状元素，其宽度调整为父元素的宽度",
      "danger:boolean --> 设置危险按钮",
      "disabled:boolean --> 按钮失效状态",
      "ghost:boolean --> 幽灵属性，使按钮背景透明(丧失背景，融入到环境中)",
      "href:string --> 点击跳转的地址，指定此属性 button 的行为和 a 链接一致。a标签的href是直接填个地址，如 http://xxx.com/",
      "htmlType:string --> 设置 button 原生的 type值。这里我好像就用过submit和默认的fefault。注意这里只接受string类型，在三元判断的时候不能写空，至少写default",
      "icon:ReactNode --> 设置按钮的图标组件，比如<Button type=`primary` shape=`round` icon={<DownloadOutlined />} size={size} />，标签自闭合，icon将会替代之前文本的位置，如果不自闭合，有文本，icon与文本都包裹在Button内",
      "loading:boolean --> 设置按钮进入载入状态。这个一般用于搜索按钮之类的，当上一个请求还没有回来不能进行下一个请求",
      "shape:string --> 设置按钮形状。circle,round",
      "size:string --> 设置按钮大小。large|middle|small",
      "target:string --> 相当于a链接的target属性，当href存在时生效。",
      "type:string --> 设置按钮的类型：primary | ghost | dashed | link | text | default",
      "onClick:(event) => void  --> 点击按钮的回调"
    ],
  },
  {
    title:"FAQ",
    children:[
      "如何移除两个汉字之间的空格？",
      "默认情况下，如果button中的文字只有两时，会在两字之间加间隔。通过设置autoInsertSpaceInButton 为 false去除。"

    ]
  }
];
export default class ButtonUse extends React.Component<any, any> {
  render() {
    // console.log(this.props);

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
