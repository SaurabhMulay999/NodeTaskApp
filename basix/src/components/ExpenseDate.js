import './ExpenseDate.css';
import React from 'react'
import ReactDOM from 'react-dom'
function ExpenseDate(props){
    const month=props.Edate.toLocaleString('en-US',{month:'long'});
    const day=props.Edate.toLocaleString('en-US',{day:'2-digit'});
    const year=props.Edate.getFullYear();    


    return (
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>


        </div>




    );
}


export default ExpenseDate;