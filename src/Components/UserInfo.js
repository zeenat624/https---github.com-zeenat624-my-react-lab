import '../styles/UserInfo.css';
function UserInfo ({User_Data}){
    return(
        <div >
        <p>{User_Data.ProfilePic}</p>
        <h2>{User_Data.name}</h2>
        <p>{User_Data.email}</p>
        <h3>{User_Data.role}</h3>
        </div>
    )
}
export default UserInfo;