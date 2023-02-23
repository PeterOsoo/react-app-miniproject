import { useEffect, useState } from "react"

import SearchIcon from "../search.svg"
import MovieCard from "./MovieCard"

const Movie = () => {
	const API_URL = "http://www.omdbapi.com?apikey=831cd9f4"

	const movie1 = {
		Title: "Sistas",
		Year: "2020–",
		imdbID: "tt12043918",
		Type: "series",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYjRhM2YwYjktMWRjNy00ZTczLWJmN2UtMTc3MzViMGVkMjRjXkEyXkFqcGdeQXVyMTkxMzg5MA@@._V1_SX300.jpg",
	}

	const [movies, setMovies] = useState([])

	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&S=${title}`)

		const data = await response.json()
		console.log(data.Search)
		setMovies(data.Search)
	}
	useEffect(() => {
		searchMovies("tyler perry")
	}, [])

	return (
		<div className="app">
			<h1>Movie Dala</h1>
			{/* search  */}
			<div className="search">
				<input
					type="text"
					placeholder="Search for Movies"
					value="Bad"
					onChange={() => {}}
				/>
				<img src={SearchIcon} alt="search" onClick={() => {}} />
			</div>
			{movies.length > 0 ? (
				<div className="container">
					{movies.map(movie => (
						<MovieCard movie={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	)
}

export default Movie
