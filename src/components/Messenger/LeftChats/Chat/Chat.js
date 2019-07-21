import React from 'reactn';
import './Chat.css';
import UserService from '../../../../services/user.service';
import { requestChat } from '../../../../services/socket.service';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.changeChat = this.changeChat.bind(this);
    }

    async componentDidMount() {
        const user = await UserService.getUser();
        this.setState({ user: user.data.results[0] });
        console.log(this.props);
    }

    changeChat() {
        requestChat(this.props)
    }

    render() {
        if (this.state.user) {
            return (
                <div className={this.props.active.id === this.props.id ? 'chat chat-active' : 'chat chat-inactive'} onClick={this.changeChat}>
                    <img src={this.state.user.picture.thumbnail} alt="Thumbnail" className="chat-avatar" />
                    <span className="chat-name">{`${this.state.user.name.first} ${this.state.user.name.last}`}</span>
                </div>
            )
        } else {
            return(null)
        }
    }
}

export default Chat;