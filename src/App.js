import "./App.css"
import { Counter } from "./components/Counter"
import { Hello } from "./components/Hello"
import Movie from "./components/Movie"

const App = () => {
	// api key 831cd9f4

	return (
		<div className="App">
			<h2>New App</h2>
			<Movie />
			{/* <Hello />
			<Counter /> */}
		</div>
	)
}

export default App
