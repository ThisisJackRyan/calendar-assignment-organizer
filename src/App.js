import { useState } from 'react';
import './App.css';
import Login from './Components/Pages/Login&CreateNewAccount/Login'
import CreateNewAccount from './Components/Pages/Login&CreateNewAccount/CreateNewAccount.jsx'

function App() {

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
}

export default App;
