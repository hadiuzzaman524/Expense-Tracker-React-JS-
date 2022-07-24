import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card  from "./card";

function ExpenseItem(props) {
  
  return (
    <Card className="expense-item">
      <div><ExpenseDate date= {props.date}></ExpenseDate></div> 
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.amount}</h2>
      </div>
    </Card>
  );
}

export default ExpenseItem;
