import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const rest = () => {
    setCount(0);
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <Title title="Counter App" />
      <Display count={count} />
      <div className="btn-container">
        <Button text="-" name="decrement" onclick={decrement} />
        <Button text="Reset" name="reset" onclick={rest} />
        <Button text="+" name="increment" onclick={increment} />
      </div>
    </div>
  );
}

export default App;
