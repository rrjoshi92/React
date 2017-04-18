import { Component } from 'react'
import { UserRow } from "./userrow"


class UserList extends Component {

    render() {
        return (
            <table className="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th>
                            Name
                </th>
                        <th>
                            Gender
                </th>
                        <th>
                            Prime User
                </th>
                        <th>
                            Student User
                </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item, index) => <UserRow
                        key={index}                      
                        {...item}
                    />)}
                </tbody>
            </table>
            )
    }
}


export { UserList }
