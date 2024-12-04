
import './App.css';
import UserInfo from './Components/UserInfo';

function App() {
  const User_Data1 = {
    name: "Muhammad Mashhood",
    email: "mashhoodpetro17@gmail.com",
    role: "Head of college",
    ProfilePic: <img className= 'image' src="ProfilePic.jpg"/>
  }
  return (
    <div className="App">
    <UserInfo User_Data={User_Data1}/>
    </div>
  );
}

export default App;
