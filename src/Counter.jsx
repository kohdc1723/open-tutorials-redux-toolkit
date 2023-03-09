import { useSelector, useDispatch } from "react-redux";
import { up, down } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={() => dispatch(down(1))}>-</button>
      {count}
      <button onClick={() => dispatch(up(1))}>+</button>
    </div>
  );
};

export default Counter;
