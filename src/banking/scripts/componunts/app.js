import { Component } from 'react'
import data from "../../data.json"
import { Userinfo } from "./userinfo"
import { UserList } from "./userlist"

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = { data: data };
    }
    getName(index) {
        return this.state.data[index].name;
    }
    getGender(index) {
        return this.state.data[index].gender;
    }
    getBalance(index) {
        return this.state.data[index].balance;
    }
    render() {
        return (
            <div className="App">           
                <UserList data={this.state.data} />
                <hr/>
                <Userinfo name={this.getName(0)} gender={this.getGender(0)} balance={this.getBalance(0)} />
            </div>
            )
    }
}