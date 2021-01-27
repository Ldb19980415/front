import React from "react";

import { createFromIconfontCN } from "@ant-design/icons";
import { IconFontProps } from "@ant-design/icons/lib/components/IconFont";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2351539_520ip7p5nbn.js",
});

interface IProps extends IconFontProps {
  type: string;
  size?: number;
  fill?: string;
}

export default class Icon extends React.Component<IProps, any> {
  render() {
    const { size = 14, type, fill, style = {} } = this.props;
    return (
      <IconFont
        {...this.props}
        type={type}
        style={{ color: fill, fontSize: size, ...style }}
      />
    );
  }
}
