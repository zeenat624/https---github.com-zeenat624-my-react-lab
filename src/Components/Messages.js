
function Message ({Messages_Data}){
    return(
        <div className="messages-container"  >
        <p>{Messages_Data.Message1}</p>
        <p>{Messages_Data.Message2}</p>
        <p>{Messages_Data.Message3}</p>
        </div>
    )
}
export default Message;