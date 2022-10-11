import ExpenseItem from './components/ExpenseItem';
import React from 'react'
import ReactDOM from 'react-dom'

<<<<<<< Updated upstream
import TailWindComponent from './components/TailWindComponent';

function App() {
  const arr=[{
    title:'The veggies',
    Eamount:'1200',
    Edate:new Date(2022,2,20)
=======

//changes made here
const DummyExpenses=[
  {
    Id:'e1',
title:'The veggies',
  Eamount:'1200',
  Edate:new Date(2022,2,20)
>>>>>>> Stashed changes

  },
{
<<<<<<< Updated upstream
  title:'The Fruits',
    Eamount:'1244',
    Edate:new Date(2022,2,21)

},
{
  title:'News Paper',
    Eamount:'120',
    Edate:new Date(2022,2,30)
=======
  Id:'e2',
title:'The Fruits',
  Eamount:'1244',
  Edate:new Date(2022,2,21)

},
{
  Id:'e3',
title:'News Paper',
  Eamount:'120',
  Edate:new Date(2022,2,30)
>>>>>>> Stashed changes

}];


  return (
  <div>
<<<<<<< Updated upstream
      <TailWindComponent/>
    </div>
    

=======
    <NewExpense onSavingExpense={ExpenseDataHandler}/>
    <Expenses arr={expense}></Expenses>
    
</div>
>>>>>>> Stashed changes
  );
}

export default App;
