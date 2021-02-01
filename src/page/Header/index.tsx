import React from 'react'
import s from './index.module.scss'
import {observer,inject} from 'mobx-react'
import moment from 'moment'
import { Icon, IconTypes } from "../../component";

interface Istate {
    nowTime : any
    timer:any
}
@inject('user')
@observer
export default class Header extends React.Component<any,Istate> {

    state = {
        nowTime : new Date(),
        timer:undefined
    }
    componentDidMount(){
        // this.setState({timer: setInterval(()=>{
        //     this.setState({
        //         nowTime : new Date()
        //     })
        // },1000)})
    }
    componentWillUnmount(){
        clearInterval(this.state.timer)
    }
    render(){
        console.log(this.props.user);
        
        return(
            <div className={s['container']}>
                <div className={s['left']}>
                <Icon size={40} type={IconTypes.iconcash} />
                </div>
                <div className={s['right']}>
                    <div>欢迎</div>
                    <div className={s['username']}>{this.props['user'].username}</div>
                    <div>{moment(this.state.nowTime).format("YYYY-MM-DD")}</div>
                </div>
            </div>
        )
    }
}