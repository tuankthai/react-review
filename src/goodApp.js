import SubmitForm from './components/SubmitForm';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    // const [firstName, setFirstName]=useState("")
    // const [lastName, setLastName]=useState("")
    const [names, setNames] = useState([])
    function renderName() {
        return names.map(({ firstName, lastName }) => <li>{firstName} {lastName}</li>)
    }
    return (
        <div className="App">
            <SubmitForm names={names} setNames={setNames} />
            {/* <span>{firstName}</span>
      <br/>
      <span>{lastName}</span> */}
            <ul>
                {renderName()}
            </ul>
        </div>
    );
}

export default App;
