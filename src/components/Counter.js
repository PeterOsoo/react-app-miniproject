import { useState, useEffect } from "react"

export const Counter = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		console.log("App loaded - useEffect Hook")
		setCounter(26)
	}, [])

	return (
		<div>
			<h2>Counter App</h2>
			Count is {counter} <br />
			<button onClick={() => setCounter(prevCount => prevCount + 1)}>
				Add
			</button>{" "}
			<br />
			<br />
			<button onClick={() => setCounter(prevCount => prevCount - 1)}>
				Subtract
			</button>
		</div>
	)
}
