import React from "react";

import s from "./index.module.scss";

interface Iprops {}

export default class ButtonUse extends React.Component<any, any> {
  render() {
    // console.log(this.props);

    return (
      <div className={s["container"]}>
        <h2>四种状态：</h2>
        <p>危险：删除/移动/修改权限等危险操作，一般需要二次确认。</p>
        <p>幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。</p>
        <p>禁用：行动点不可用的时候，一般需要文案解释。</p>
        <p>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</p>
        <h2>使用：{`import {Button} from 'antd'`}</h2>
        <h2>属性说明：</h2>
        <p>block:boolean  由行间块状元素变成块状元素，其宽度调整为父元素的宽度</p>
        <p></p>
      </div>
    );
  }
}
