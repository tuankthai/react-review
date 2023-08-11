
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SubmitForm from "./components/SubmitForm"
import { useState } from 'react';

function App() {
  const [firstname, setFirstname] = useState(null)
  const [lastname, setLastname] = useState(null)
  const [validated, setValidated] = useState(false);

  return (
    <div className="App">
      <SubmitForm setFirstname={setFirstname} setLastname={setLastname}
        validated={validated} setValidated={setValidated} />
      {validated && <p>firstname: {firstname}</p>}
      {validated && <p>lastname: {lastname}</p>}
      {/* <ul>
        <li>
          create a form. 
        </li>
      </ul> */}
    </div>
  );
}

export default App;
