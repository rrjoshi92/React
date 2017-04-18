import { Component } from 'react'




class Userinfo extends Component {
    
    render() {
        return (
            <div className="accountinfo">
                <div className="name">
                    <span>{this.props.name}</span>
                </div>
                <div className="gender">
                    <span>{this.props.gender}</span>
                </div>
                <div className="balance">
                    <span>{this.props.balance}</span>
                </div>
            </div>
        )
    }

}

export { Userinfo };