import React from 'react';

// components
import { Button } from './components/Button'
import { sum } from './helpers/sum';

// UI -> action -> update state -> UI

export default function StatefulComponent() {
  // states
  const [count, setCount] = React.useState(1);

  // actions
  function handleIncrement() {
    // setCount(preState => preState + 1)
    window.location.href = 'google.com'
  }

  // UI
  return (
    <div>
      Stateful: {count} <button type='button' onClick={handleIncrement}>increement</button>
    </div>
  )
}
