function UserInfo ({User_Data}){
    return(
        <div>
        <h2>{User_Data.name}</h2>
        <p>{User_Data.email}</p>
        <p>{User_Data.role}</p>
        <p>{User_Data.ProfilePic}</p>
        </div>
    )
}
export default UserInfo;