import "./ExpenseForm.css"; 

const ExpenseForm = ()=> {
    return (
        <form>
            <div className="form-item__controls">
            <div className="form-item__control">
            <label>Expense Title</label>
            <input type="text" />
            </div>
            
            <div className="form-item__control">
            <label>Expense Amount</label>
            <input type="number" min="1" step="1" />
            </div>

            <div className="form-item__control">
            <label>Date</label>
            <input type="date" />
            </div>
            <button type="submit"> Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;