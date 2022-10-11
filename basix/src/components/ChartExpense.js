import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';
import Chart from './Chart';

const ChartExpenses=(props)=>{

const CharObject=[
    {
        label:'Jan', value:0
    },
    {
        label:'Feb', value:0
    },
    {
        label:'Mar', value:0
    }
];

for(const expense of props.expenses){
    const expensemonth=expense.Edate.getMonth();
    CharObject[expensemonth].value+=expense.amount;

}


return ( 

    <Chart DataPoints={CharObject}/>
      
    );




};

export default ChartExpenses;