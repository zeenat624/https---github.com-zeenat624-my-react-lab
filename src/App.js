import './styles/UserInfo.css';
import './App.css';
import UserInfo from './Components/UserInfo';
import Statistics from './Components/Statistics';
import './styles/Statistics.css';
import Messages from './Components/Messages';
import './styles/Messages.css';

function App() {
  const User_Data1 = {
    ProfilePic: <img className= 'image' src="ProfilePic.jpg"/>,
    name: "Muhammad Mashhood",
    email:<a href="mailto:mashhoodpetro17@gmail.com">mashhoodpetro17@gmail.com</a> ,
    role: "Head of college"
  }
  const Statistics_Data1 = {
    totalUsers: "125",
    activeUsers: "100",
    newSignups: "10",
    activePercentage: Math.round((100/125) *100)
  }
  const Messages_Data1 = {
    Message1: "Your current active percentage is 80%. Keep up the engagement!",
    Message2: "Your profile is up to date!",
    Message3: "Congrats! You've reached a milestone of 100 active users!"
  }
  return (
    <div className="container">
    <UserInfo User_Data={User_Data1}/>
    <Statistics Statistics_Data={Statistics_Data1}/>
    <Messages Messages_Data= {Messages_Data1}/>
    </div>
  );
}

export default App;
