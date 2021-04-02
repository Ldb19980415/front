import React, { useState } from "react";
import { Row, Col } from "antd";
import Instance1 from "./Instance1";
import Instance2 from "./Instance2";

export default () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <div>hook -- useState</div>
          <Instance1 />
        </Col>
        <Col span={8}>
          <div>hook -- useEffect</div>
          <Instance2 />
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};
