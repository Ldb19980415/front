import React from 'react'
import s from './index.module.scss'
import moment from 'moment'
import {observer,inject} from 'mobx-react'
import {Icon,IconTypes} from '../../component'
import {Button , Input,Divider, message} from 'antd'

interface Istates {
    color:string
    timer:NodeJS.Timer | null
    weightData:any
    wave:number | null
    inputValue : string
} 
@inject('user')
@observer
export default class RecordWeight extends React.Component <any,Istates>{
    state = {
        color:'0,0,0',
        timer:null,
        weightData:[],
        wave:null,
        inputValue:''
    }
    componentDidMount(){
        this.searchData()
        this.setState({
            timer: setInterval(()=>{this.createColor()},1000)
        })
        
    }
    commitRecord = async() => {
        let reg = /^\d+(\.\d+)?$/
        if(!reg.test(this.state.inputValue)){
            message.error("请输入纯数字")
            return
        }
        let res = await this.props.user.launch('post','sunjie_create',{currentWeight:this.state.inputValue})
        this.setState({
            inputValue:''
        })
        if(res.success){
            this.searchData()
        }
        console.log(res);
        
    }
    searchData = async() => {
        let res = await this.props.user.launch('get','sunjie_search')
        if(res.success){
            if(res.record[1]){
                console.log(res.record[0]['current_weight']);
                console.log(Number(res.record[0]['current_weight']));
                console.log(Number(res.record[1]['current_weight']));
                
                let wave = Number(res.record[0]['current_weight']) - Number(res.record[1]['current_weight'])
                console.log(wave);
                this.setState({wave})
            }
            this.setState({
                weightData:res.record
            })
        }

    }
    createColor = () => {
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)
        this.setState({
            color:`rgb(${r},${g},${b})`
        })
    }
    componentWillUnmount(){
        clearInterval(Number(this.state.timer))
    }
    render(){
        return (
            <div className={s['container']}>
                <div className={s['showInfo']}>
                    <h2>今天是：{moment(new Date()).format("YYYY-MM-DD")}</h2>
                    <h3>欢迎你：<span style={{color:this.state.color}}>孙洁</span></h3>
                    <h2>下面是你上一次的记录：</h2>
                    <h1><span>{this.state.weightData[0] ? this.state.weightData[0]['current_weight'] + 'kg':'暂无记录'}</span>  </h1>
                    <h1 style={{display:this.state.wave !== null? '' : 'none'}}>相比于上一期：{renderMave(this.state.wave)}</h1>
                </div>
                <Divider/>
                <div className={s['recordRow']}>
                    <h1>要不记上一笔？</h1>
                    <div><Input placeholder="请输入你当前的体重，单位kg" style={{width:'300px'}} value={this.state.inputValue} onChange={(e)=>{this.setState({
                        inputValue:e.target.value
                    })}}/></div>
                    <div style={{marginTop:'30px'}}>
                        <Button onClick={this.commitRecord}>提交</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const  renderMave = (mave) => {
    if(mave == 0){
        return <span>没有变动呐</span>
    }
    if(mave < 0) {
        return <span>变瘦了{Math.abs(mave)} <Icon  style={{ color: 'red', fontSize: 30 }} type={IconTypes.iconxiajiang}/></span>
    }
    if(mave > 0) {
        return <span>重了那么一点点：{Math.abs(mave)} <Icon  style={{ color: 'red', fontSize: 30 }} type={IconTypes.iconshangsheng}/></span>
    }
}