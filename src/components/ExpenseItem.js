import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
        <h2>22 feb 2022</h2>
      <div className="expense-item__description">
        <h2>This is title</h2>
      </div>
      <div className="expense-item__price">
        <h2>$244.42</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
