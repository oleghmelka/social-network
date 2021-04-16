import React, {Component} from 'react';


class ProfileStatusClassComponent extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        // this.forceUpdate() Принудительно заставить Реакт перерисовать компоненту, не стоит использовать!
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        });
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render () {
        return (
            <div >
                { !this.state.editMode && 
                    <div>
                        <span onDoubleClick = {this.activateEditMode}>{this.props.status || 'не ищу новую работу'}</span>
                    </div>
                }
                { this.state.editMode && 
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status}></input>
                    </div>
                }
            </div>
        );
    }
    

  }
  
  
  export default ProfileStatusClassComponent;