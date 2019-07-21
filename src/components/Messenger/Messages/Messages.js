import React from 'reactn';
import './Messages.css';
import { sendMessage } from '../../../services/socket.service';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
        this.updateMessage = this.updateMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    updateMessage = (evt) => {
        this.setState({message: evt.target.value});
    }

    getMessages() {
        return this.props.messages.map((message, index) => <div key={index} className={message.sender_id === this.global.user.id ? 'message-me clear-fix' : 'message-them clear-fix'}>{message.message}</div>);
    }

    sendMessage = () => {
        sendMessage({user: this.global.user, message: this.state.message, chat: this.props.selectedChat});
        this.setState({message: ""});
    }
    
    render() {
        return (
            <div className="messages-container">
                <div className="messages">
                    { this.getMessages() }
                </div>
                <div className="send-message d-flex">
                    <div className="form-group m-0 h-100 w-100">
                        <textarea className="form-control h-100" value={this.state.message} onChange={this.updateMessage} />
                    </div>
                    <div className="form-group h-100 m-0 p-0">
                        <button className="message-button btn-blue h-100" onClick={this.sendMessage}>></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Messages;