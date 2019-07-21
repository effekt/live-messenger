import React from 'reactn';
import './LeftChats.css';
import Chat from './Chat/Chat';


class LeftChats extends React.Component {
    getChats() {
        return this.props.chats.map((chat, index) => <Chat key={index} {...{...chat, active: this.props.selectedChat}} />);
    }
    
    render() {
        return (
            <div className="max-height right-border left-chats">
                { this.getChats() }
            </div>
        );
    }
}

export default LeftChats;