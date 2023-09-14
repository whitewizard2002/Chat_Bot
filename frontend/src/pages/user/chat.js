import 'bootstrap/dist/css/bootstrap.min.css';
import SidePanel from '../../components/SidePanel';
import ChatArea from '../../components/ChatArea';

function ChatPage(){
    return <div className="fluid-container bg">
        <div className="row">
            <div className="col-4">
                <SidePanel/>
            </div>
            <div className="col-8">
                <ChatArea/>
            </div>
        </div>
    </div>
}

export default ChatPage;