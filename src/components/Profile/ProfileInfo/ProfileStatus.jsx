import React, {Component} from 'react';


class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        title: 'Yo, man'
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
        // this.forceUpdate() Принудительно заставить Реакт перерисовать компоненту, не стоит использовать!
    }

    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }


    render () {
        return (
            <div >
                { !this.state.editMode && 
                    <div>
                        <span onDoubleClick = {this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode && 
                    <div>
                        <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} value={this.props.status}></input>
                    </div>
                }
            </div>
        );
    }
    

  }
  
  
  export default ProfileStatus;