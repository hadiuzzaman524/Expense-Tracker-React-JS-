import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card  from "./card";
import {useState} from "react";

function ExpenseItem(props) {
  
  const [title, onTitle] = useState(props.title);

  const onClick = ()=> {
    onTitle("Updated!!!!");
    console.log("Clicked");
  }

  return (
    <Card className="expense-item">
      <div><ExpenseDate date= {props.date}></ExpenseDate></div> 
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.amount}</h2>
      </div>
      <div><button onClick={onClick}>Update Title</button></div>
    </Card>
  );
}

export default ExpenseItem;
