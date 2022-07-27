import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";




const NewExpense = (props) => {

  const onSubmitForm = (expense) => {
    props.onSubmitForm(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={onSubmitForm}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
