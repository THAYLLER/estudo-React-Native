import React, {Component} from 'react'

class User extends Component {

    render() {
        return (
            <div>
                Nome: {this.props.name}
                <User name="thayller"></User>
            </div>
        )
    }
}

export default User