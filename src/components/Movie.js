import { useEffect } from "react"

const Movie = () => {
	const API_URL = "http://www.omdbapi.com?apikey=831cd9f4"

	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&S=${title}`)

		const data = await response.json()
		console.log(data)
	}
	useEffect(() => {
		searchMovies("Sistas")
	}, [])

	return <div>Movie</div>
}

export default Movie
