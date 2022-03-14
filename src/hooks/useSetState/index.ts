import { useCallback, useState } from "react"
/**
 * 管理object类型state的Hooks 用法与class组件的this.setState一致
 * @param initialState 初始状态
 * @returns [state, setState]
 */
const useSetState = <S>(initialState: S | (() => S)) => {
	const [state, setState] = useState(initialState)

	const setMergeState = useCallback(patch => {
		setState(prevState => {
			const newState = typeof patch === 'function' ? patch(prevState) : patch
			return newState ? { ...prevState, ...newState } : prevState
		})
	}, [])

	return [state, setMergeState] as const
}

export default useSetState