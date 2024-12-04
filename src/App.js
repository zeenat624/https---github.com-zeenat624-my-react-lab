import './styles/UserInfo.css';
import './App.css';
import UserInfo from './Components/UserInfo';

function App() {
  const User_Data1 = {
    ProfilePic: <img className= 'image' src="ProfilePic.jpg"/>,
    name: "Muhammad Mashhood",
    email:<a href="url">mashhoodpetro17@gmail.com</a> ,
    role: "Head of college"
  }
  const Statistics_Data1 = {
    totalUser: "100",
    activeUsers: "70",
    newSignups: "10",
    acivePercentage: (70*10/ 100)*100,
  }
  return (
    <div className="container">
    <UserInfo User_Data={User_Data1}/>
    </div>
  );
}

export default App;
