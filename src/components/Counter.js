import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // react-redux sets up subscription to redux store
  const counter = useSelector((state) => state.counter);
  const displayCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementByOneHandler = () => {
    dispatch({ type: 'increment', value: 1 });
  };

  const incrementByFiveHandler = () => {
    dispatch({ type: 'increment', value: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {displayCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementByOneHandler}>Increment By 1</button>
        <button onClick={incrementByFiveHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
