import { useState } from 'react';

const Button = props => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{ color: props.color, textDecoration: props.underline ? 'underline' : undefined }}
      onClick={() => setCounter(c => c + props.increment)}
    >
      Clicked {counter} times
    </div>
  );
};

export default Button;
