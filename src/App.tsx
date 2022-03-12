import { useMemo, useState } from 'react';
import UseCounterDemo from './hooks/useCounter/demo/demo1';
import UseMemoizedFn1 from './hooks/useMemoizedFn/demo/demo1'
import UseMemoizedFn2 from './hooks/useMemoizedFn/demo/demo2'
import UseCountDown1 from './hooks/useCountDown/demo/demo1'
import UseCountDown2 from './hooks/useCountDown/demo/demo2'
import UseLatest from './hooks/useLatest/demo/demo1'
import UseMount from './hooks/useMount/demo/demo1'
import UseUnmount from './hooks/useUnmount/demo/demo1'
import UseUnmountedRef from './hooks/useUnmountedRef/demo/demo1'
import './app.css'

function App() {
  const [type, setType] = useState('')
  const hooks = useMemo(() => [
    {
      type: 'useCounter',
      title: 'useCounter',
      description: '管理计数器的 Hook',
      components: <UseCounterDemo />
    },
    {
      type: 'useMemoizedFn',
      title: 'useMemoizedFn',
      description: '持久化 function 的 Hook',
      components: <><UseMemoizedFn1 /> <hr /> <UseMemoizedFn2 /></>
    },
    {
      type: 'useCountDown',
      title: 'useCountDown',
      description: '一个用于管理倒计时的 Hook',
      components: <><UseCountDown1 /> <hr /> <UseCountDown2 /></>
    },
    {
      type: 'useLatest',
      title: 'useLatest',
      description: '返回当前最新值的Hook, 可以避免闭包问题',
      components: <UseLatest />
    },
    {
      type: 'useMount',
      title: 'useMount',
      description: '只在组件初始化时(mount)执行的 Hook',
      components: <UseMount />
    },
    {
      type: 'useUnmount',
      title: 'useUnmount',
      description: '只在组件卸载(unmount)时执行的 Hook',
      components: <UseUnmount />
    },
    {
      type: 'useUnmountedRef',
      title: 'useUnmountedRef',
      description: '获取当前组件是否已经卸载的 Hook',
      components: <UseUnmountedRef />
    },
  ], [])
  const helper = useMemo(() => [
    {
      type: 'parseMs',
      title: 'parseMs',
      description: '根据时间戳计算时间戳对应的天，时，分，秒，毫秒数',
    },
  ], [])
  return (
      <div className="box">
        <div className="left">
          <h1>Hooks</h1>
          <ol>
            {
              hooks.map((item, key) => (
                <li key={key}>
                  <div className={`title ${item.type === type ? 'active' : ''}`} onClick={() => setType(item.type)}>{item.title}</div>
                  <p className="small">{item.description}</p>
                </li>
              ))
            }
          </ol>

          <h1>helper</h1>
          <ol>
            {
              helper.map((item, key) => (
                <li key={key}>
                  <div className={`title ${item.type === type ? 'active' : ''}`} onClick={() => setType(item.type)}>{item.title}</div>
                  <p className="small">{item.description}</p>
                </li>
              ))
            }
          </ol>
        </div>
        <div className="right">
          {
            hooks.find(item => item.type === type)?.components
          }
        </div>
      </div>
  );
}

export default App;
