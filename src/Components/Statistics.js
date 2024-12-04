import '../styles/Statistics.css';
function Statistics ({Statistics_Data}){
    return(
    <div className="card2" >
    <p >Total_Users: {Statistics_Data.totalUsers}</p>
    <p>Active_Users_Users:{Statistics_Data.activeUsers}</p>
    <p>New_Signups:{Statistics_Data.newSignups}</p>
    <p>Active_Percentage: {Statistics_Data.activePercentage}%</p>
    </div>
    )
}
export default Statistics;