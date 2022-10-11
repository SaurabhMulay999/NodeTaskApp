import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Card from './card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseList from './ExpenseList';
import Filter from './Filter';
import ChartExpenses from './ChartExpense';
function expenses(props){
    const [FilterData,setFilterData]=useState('2022');

    //get the selected year as child to parent data pass child is Filter
    const ExpensefilterData=(SelectedYear)=>{
        setFilterData(SelectedYear);
        console.log(FilterData);

    };
    //fiter the props.arr as per filterYear
    const filterExpenses=props.arr.filter(expense=>{
        return expense.Edate.getFullYear().toString()===FilterData;
    })
   

     
    



    return (
        <> 
       
        <br/>
        <div className='expense'>
          <Card>  
            <Filter FilterEventHandle={ExpensefilterData}></Filter>
            <ChartExpenses expenses={filterExpenses}/>
                
                <ExpenseList filterExpenses={filterExpenses}/>

                
         
            </Card>
         </div>
        </>

    );


    };

export default expenses;