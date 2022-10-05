import ExpenseItem from './components/ExpenseItem';
import React from 'react'
import ReactDOM from 'react-dom'

import TailWindComponent from './components/TailWindComponent';

function App() {
  const arr=[{
    title:'The veggies',
    Eamount:'1200',
    Edate:new Date(2022,2,20)

  },
{
  title:'The Fruits',
    Eamount:'1244',
    Edate:new Date(2022,2,21)

},
{
  title:'News Paper',
    Eamount:'120',
    Edate:new Date(2022,2,30)

}];


  return (
  <div>
      <TailWindComponent/>
    </div>
    

  );
}

export default App;
