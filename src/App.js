import React from 'react';
import logo from './logo.svg';
// css
import './App.css';

// helpers
import { sum } from './helpers/sum';

// components
import { Button } from './components/Button'
import PageA from './PageA';
import StatefulComponent from './StatefulComponent';
import State from './State';
import ConditionRendering from './ConditionRendering';
import ComposeComponent from './ComposeComponent/ComposeComponent';
import ListKey from './List-Key';
import LiftingStateUp from './LiftingStateUp/LiftingStateUp';

function App() {
  // states
  const count = 5 + 5 + 5;
  const element_1 = <h1>Counter: ${5 + 5}</h1>
  const sumAccount = sum(2, 3);
  const renderButton = <Button />
  const [forceRenderList, setForceRenderList] = React.useState(Date.now())

  // actions

  // UI
  const renderOtherButton = () => { // react function component
    const otherButton = 2;
    console.log('renderOtherButton', otherButton)
    return (
      <Button />
    )
  };

  // UI
  function getName(name) {
    return (
      <div>
        getName: {name}
      </div>
    )
  }

  // UI
  return (
    <div className="App">
      <input />
      <br />
      <div>lorem </div>
      <div>lorem </div>
      <div>lorem </div>

      <div className='text1'>Number: {count} </div>
      <div>Sum: {sumAccount} </div>
      <h3>Expression: {element_1}</h3> 
      {getName('truong')}
      <h3>Render other component into this</h3>
      <Button 
        sum={1} 
        name="truong" 
      />
      <br />
      {renderButton}
      <br />
      {renderOtherButton()}
      <br />
      <br />

      <h3>PagA</h3>
      <PageA />
      <br />
      <br />

      <h3>Stateful components</h3>
      <StatefulComponent />
      <br /> <br />

      <h3>State</h3>
      <State />
      <br />
      <br /><br />

      <h3>Condition Rendering</h3>
      <ConditionRendering />
      <br /><br /><br />

      <h3>ComposeComponent</h3>
      <ComposeComponent />

      <h3>List & Keys</h3>
      <Button 
        name="force render list"
        onClick={() => {
          setForceRenderList(Date.now())
        }}
      />
      <ListKey key={forceRenderList} />

      <h3>Lifting state up</h3>
      <LiftingStateUp />

      <br /> <br />
    </div>
  );
}

export default App;
