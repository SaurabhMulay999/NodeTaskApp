import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import ExpenseDate from './ExpenseDate';


const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]=useState('');

    const onChangeEventHandler= (event)=>{

        setEnteredTitle(event.target.value);

    };
    const[enteredAmount,setEnteredAmount]=useState('');
    
    const onChangeEventHandler1= (event)=>{

        setEnteredAmount(event.target.value);

    };

    const[enteredDate,setEnteredDate]=useState('');
    
    const onChangeEventHandler2= (event)=>{

        setEnteredDate(event.target.value);

    };
    //on for submut adding a submit event
    const SubmitEvent=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            Eamount:enteredAmount,
            Edate:new Date(enteredDate)
        };
        //here we are getting the data onsubmit in a expenseData object
        props.onSaveExpenseData(expenseData);

        //to clear the form 
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        console.log(expenseData);


    };



    return(
        <div className=' mx-96 my-7 mt-6 justify-center'>
            <form  onSubmit={SubmitEvent}>
                <div>
                    <div>
                        <label>Title</label>
                        <br/>
                        <input type='text' value={enteredTitle} onChange={onChangeEventHandler}/>

                    </div>
                    <div>
                        <label>Amount</label>
                        <br/>
                        <input type='number' onChange={onChangeEventHandler1} min="0.01" step="0.01"/>
                        
                    </div>
                    <div>
                        <label>Date</label>
                        <br/>
                        <input type='Date' onChange={onChangeEventHandler2} min="2019-01-01" max="2022-12-31"/>
                        
                    </div>

                </div>
                <div>
                <br/>
                    <button type="submit">AddExpense</button>
                    <br/>
                    <button onClick={props.oncancle} type="button">Cancel</button>
                </div>
            </form>
        </div>
    
    );
    
    }
    
    export default ExpenseForm;