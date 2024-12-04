function Statistics ({Statistics_Data}){
    return(
        <div >
        <p>{Statistics_Data.totalUsers}</p>
        <p>{Statistics_Data.activeUsers}</p>
        <p>{Statistics_Data.newSignups}</p>
       
       
        </div>
    )
}
export default Statistics;