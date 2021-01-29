import React from 'react'

interface Iprops {

}

export default class ButtonUse extends React.Component<any,any>{

    render(){
        // console.log(this.props);
        
        return <span onClick={()=>{
            this.props.history.push('/home')
        }}>使用Button</span>
    }
}