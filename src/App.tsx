import React from 'react';
import UseCounterDemo from './hooks/useCounter/demo/demo1';
import UseMemoizedFn1 from './hooks/useMemoizedFn/demo/demo1'
function App() {
  return (
    <>
      <div>
        useCounter: <UseCounterDemo />
      </div>
      <div>
        useMemoizedFn: <UseMemoizedFn1 />
      </div>
    </>
  );
}

export default App;
