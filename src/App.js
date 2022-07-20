import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <ExpenseItem date="22 feb 2022" title="Buy T-shirt" />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
