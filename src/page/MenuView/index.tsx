import React from 'react' 

// import {observer} from 'mobx-react'
import {Link,withRouter} from 'react-router-dom'
import menus from '../../constData/menus'
// @observer
export default class MenuView extends React.Component{
    render(){
        return (
            <div>
                {
                    menus.map(item => <Link to={'/useAntd/useButton'} >caidan</Link>)
                }
            </div>
        )
    }
}