
function Message ({Messages_Data}){
    return(
        <div className="messages-container"  >
        <h2>Welcome back! Muhammad Mashhood, Here's your dashboard overview.</h2>
        <p>{Messages_Data.Message1}</p>
        <p>{Messages_Data.Message2}</p>
        <p>{Messages_Data.Message3}</p>
        </div>
    )
}
export default Message;