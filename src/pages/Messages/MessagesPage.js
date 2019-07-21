import React from 'reactn';
import LeftChats from '../../components/Messenger/LeftChats/LeftChats';
import Messages from '../../components/Messenger/Messages/Messages';
import { requestChats, subscribeToChats, subscribeToChat, requestChat, subscribeToReceivedMessage } from '../../services/socket.service';

class MessagesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChat: null,
            messages: [],
            chats: [],
        }
    }

    componentDidMount() {
        if (!this.global.user) {
            this.props.history.push('/login');
        } else {
            requestChats(this.global.user);
            subscribeToChats((chats) => {
                this.setState({ chats: chats });
                if (chats.length) {
                    this.setState({selectedChat: chats[0]});
                    requestChat(chats[0]);
                }
            });
            subscribeToChat((chat) => {
                this.setState({ selectedChat: chat.chat })
                this.setState({ messages: chat.messages });
            });
            subscribeToReceivedMessage((message) => {
                this.setState({ messages: [...this.state.messages, message] })
            });
        }
    }

    render() {
        if (this.global && this.global.user) {
            return(
                <div className="page-content">
                    <div className="d-flex">
                        <LeftChats {...{chats: this.state.chats, selectedChat: this.state.selectedChat}} />
                        <Messages {...{messages: this.state.messages, selectedChat: this.state.selectedChat}} />
                    </div>
                </div>
            );
        } else {
            return (null)
        }
    }
}

export default MessagesPage;
