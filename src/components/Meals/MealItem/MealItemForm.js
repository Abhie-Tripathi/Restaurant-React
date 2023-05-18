import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountValid, setamountValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNO = +enteredAmount;

    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNO > 5 ||
      enteredAmountNO < 1
    ) {
      setamountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNO)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please Enter Valid Amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
