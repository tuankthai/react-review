import SubmitForm from './components/SubmitForm';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [names, setNames] = useState([])
  function renderName() {
    return names.map(({ firstName, lastName }, index) => <li key={index}>{firstName} {lastName}</li>)
  }
  console.log("test rendername", renderName())
  return (
    <div className="App">
      <SubmitForm names={names} setNames={setNames} />
      <ul>
        {renderName()}
      </ul>
    </div>
  );
}

export default App;