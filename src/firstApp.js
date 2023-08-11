
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SubmitForm from "./components/SubmitForm"
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  

  return (
    <div className="App">
      <SubmitForm setFirstname={setFirstName} setLastname={setLastName} />
      <span>{firstName}</span>
      <br />
      <span>{lastName}</span>

      {/* <ul>
        <li>
          create a form. 
        </li>
      </ul> */}
    </div>
  );
}

export default App;
