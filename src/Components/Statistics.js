import '../styles/Statistics.css';

function Statistics({ Statistics_Data }) {
  // Calculate the bar width based on the data values
  const totalUsersWidth = (Statistics_Data.totalUsers / 200) * 100;
  const activeUsersWidth = (Statistics_Data.activeUsers / 200) * 100;
  const newSignupsWidth = (Statistics_Data.newSignups / 50) * 100;
  const activePercentageWidth = Statistics_Data.activePercentage;

  return (
    <div className="card2">
      <h3>Statistics Overview</h3>
      <div className="stats-bar">
        <p>Total Users: {Statistics_Data.totalUsers}</p>
        <div className="bar-container">
          <div className="bar total-users" style={{ width: `${totalUsersWidth}%` }}></div>
        </div>

        <p>Active Users: {Statistics_Data.activeUsers}</p>
        <div className="bar-container">
          <div className="bar active-users" style={{ width: `${activeUsersWidth}%` }}></div>
        </div>

        <p>New Signups: {Statistics_Data.newSignups}</p>
        <div className="bar-container">
          <div className="bar new-signups" style={{ width: `${newSignupsWidth}%` }}></div>
        </div>

        <p>Active Percentage: {Statistics_Data.activePercentage}%</p>
        <div className="bar-container">
          <div className="bar active-percentage" style={{ width: `${activePercentageWidth}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
