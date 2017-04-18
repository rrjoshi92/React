import { Component } from 'react'
import Tick from "react-icons/lib/ti/tick-outline"
import  Times  from "react-icons/lib/ti/times-outline"

class UserRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.gender}</td>
                <td>{(this.props.isPrimium) ? <Tick /> : <Times />}</td>
                <td>{(this.props.isStudent) ? <Tick /> : <Times />}</td>
            </tr>            
            )
    }
}


export { UserRow }