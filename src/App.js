import "./App.css"
import { Counter } from "./components/Counter"
import { Hello } from "./components/Hello"

const App = () => {
	return (
		<div className="App">
			<h2>New App</h2>
			<Hello />
			<Counter />
		</div>
	)
}

export default App
