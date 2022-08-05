import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/AddToList';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
  } []
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "",
      age: 36,
      note: "Allergic to staying on the same team",
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}/>
      <AddToList/>
    </div>
  );
}

export default App;
