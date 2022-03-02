import UseCounterDemo from './hooks/useCounter/demo/demo1';
import UseMemoizedFn1 from './hooks/useMemoizedFn/demo/demo1'
import UseMemoizedFn2 from './hooks/useMemoizedFn/demo/demo2'

function App() {
  return (
    <>
      <div>
        useCounter: 
        <UseCounterDemo />
      </div>
      <hr />
      <div>
        useMemoizedFn: 
        <UseMemoizedFn1 />
      </div>
      <hr />
      <div>
        useMemoizedFn: 
        <UseMemoizedFn2 />
      </div>
      <hr />
    </>
  );
}

export default App;
