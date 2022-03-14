import useSetState from ".."

interface State {
	hello: string;
	count: number;
	[key: string]: any;
}
const Index = () => {
	const [state, setState] = useSetState<State>({
		hello: '',
		count: 0
	})

	return (
		<>
			<pre>{ JSON.stringify(state, null, 2) }</pre>
			<p>
				<button type="button" onClick={() => setState({ hello: 'world' })}>set hello</button>
				<button type="button" onClick={() => setState({ foo: 'bar' })}>set foo</button>
				<button type="button" onClick={() => setState((prev: { count: number; }) => ({ count: prev.count + 1 }))}>count + 1</button>
			</p>
		</>
	)
}

export default Index