import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(parseInt(inputValue.current.value)));
    inputValue.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(
      counterActions.subtract({ value: parseInt(inputValue.current.value) })
    );
    inputValue.current.value = "";
  };

  const handlePrivacyBtn = () => {
    dispatch(privacyActions.togglePrivacy());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4  gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyBtn}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center input-gap">
        <input type="text" placeholder="Enter Number" ref={inputValue} />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
