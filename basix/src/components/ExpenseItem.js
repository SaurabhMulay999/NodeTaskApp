import './Expenseitem.css'
import ExpenseDate from './ExpenseDate';

import React from 'react'
import ReactDOM from 'react-dom'
function ExpenseItem(props){
    //const Edate=new Date(2022,2,19);
    //const title='Vegtables and fruits';
    //const Eamount=200;
    //const month=props.Edate.toLocaleString('en-US',{month:'long'});
    //const day=props.Edate.toLocaleString('en-US',{day:'2-digit'});
    //const year=props.Edate.getFullYear();    
    return(
        <>
        <h1 className='text-blue-300'>HIIIIIIIIII</h1>
    
        <div className='expense-item'>
            <ExpenseDate Edate={props.Edate}/>
            
        
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div>${props.Eamount}</div>
        </div>

        </div>
        </>
    );
}

export default ExpenseItem;