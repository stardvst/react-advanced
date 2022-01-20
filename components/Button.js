import { useReducer } from 'react';

function reducer({ state }) {
  switch (state) {
    case 'NOT_PRESSED':
      return { state: 'PRESSED_ONCE' };
    case 'PRESSED_ONCE':
      return { state: 'PRESSED_TWICE' };
    case 'PRESSED_TWICE':
      return { state: 'NOT_PRESSED' };
  }
}

const Button = props => {
  const [state, dispatch] = useReducer(reducer, { state: 'NOT_PRESSED' });

  return (
    <div style={{ color: props.color, textDecoration: props.underline ? 'underline' : undefined }}>
      <div onClick={dispatch}>I am a button</div>
      <div>{state.state}</div>
    </div>
  );
};

export default Button;
