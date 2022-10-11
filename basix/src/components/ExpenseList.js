import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import ExpenseItem from './ExpenseItem';

const ExpenseList=(props)=>{
    let expenseContent=<p>No expenses found</p>;

    if(props.filterExpenses.length===0){
        return <h2>Found No expenses</h2>;
    }
    else{

        return(

         expenseContent=props.filterExpenses.map((expense) => (
        <ExpenseItem  key={expense.Id} Edate={expense.Edate} title={expense.title} Eamount={expense.Eamount}/>
        )));
    
    };
        

}


export default ExpenseList;
