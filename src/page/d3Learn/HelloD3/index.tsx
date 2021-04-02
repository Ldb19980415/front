import React from 'react' 
import * as d3 from 'd3'
import {Row,Col,Button} from 'antd'
import s from './index.module.scss'



export default class HelloD3 extends React.Component{
    public wrapRef: React.RefObject<HTMLDivElement> = React.createRef()
    state = {
    }
    changeColor= () => {
        const d3_wrap = d3.select(this.wrapRef.current)
        d3_wrap.style("background-color",  function() { // 选择 -> 动态设置属性
            return "hsl(" + Math.random() * 360 + ",100%,80%)";
            //hsl--> H色相，是色彩的基本属性。饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取0-100%的数值。
            //明度（V），亮度（L），取0-100%。
          }); 
    }
    render(){
        return (
            <div className={s['container']}>
                <Row gutter={12}>
                    <Col span={6}>
                        <div ref={this.wrapRef} style={{height:'200px'}}>

                        </div>
                        <div>说明：使用d3获取到该元素，并使用d3去控制该元素的属性，如背景色</div>
                        <Button onClick={this.changeColor}>切换颜色</Button>
                    </Col>
                </Row>
                <Row>

                </Row>
            </div>
        )
    }
}


