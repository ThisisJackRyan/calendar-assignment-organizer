//import { useState } from 'react';
import './App.css';
//import Login from './Components/Pages/Login&CreateNewAccount/Login'
//import CreateNewAccount from './Components/Pages/Login&CreateNewAccount/CreateNewAccount.jsx'
import Calendar from './Components/Pages/Home/Calendar';
//Contains Login
/*function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
}
  return (
    <div>
      {
      currentForm === "login" ? <Login switchForm={toggleForm} /> : <CreateNewAccount switchForm={toggleForm} />
      }
    </div>
  );
}*/


function App() {
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default App;
