import{ MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('67966fdb-f481-416d-a51a-4f5079a32779',
    props.user.username,
    props.user.secret
    );
    return(
        <div style={{ height:'100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style = {{height: '100%'}} />
        </div>
    )
}

export default ChatsPage