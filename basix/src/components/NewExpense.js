import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{
    const[isaddExpense,setIsAddExpense]=useState(false);

    const startEditing=()=>{
        setIsAddExpense(true);



    };

    const stopEditing=()=>{
        setIsAddExpense(false);
    }


    const ExpenseHandler =(enteredData)=>{
        const expenseData={
        ...enteredData,
        //id:Math.random().toString()
        };
        props.onSavingExpense(expenseData);

        //console.log(expenseData);
    };

return(
    <div>

        {!isaddExpense && <button className='mx-96 mt-6' onClick={startEditing}>Add new Expense</button>}
        {isaddExpense &&  <ExpenseForm oncancle={stopEditing} onSaveExpenseData={ExpenseHandler}></ExpenseForm>}

    </div>

);

}

export default NewExpense;