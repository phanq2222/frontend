import React from 'react';

import { Button } from './components/Button';

function Typography() {
  return (
    <div>Typography</div>
  )
}

function StatefulComponent() {
  return (
    <div>
      <h2>StatefulComponent</h2>
      <br />
      <Button 
        name="StatefulComponent"
        sum={2}
        component={<Typography />}
      />
    </div>
  )
}

export default StatefulComponent