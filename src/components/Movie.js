import { useEffect, useState } from "react"

import SearchIcon from "../search.svg"
import MovieCard from "./MovieCard"

const Movie = () => {
	const API_URL = "http://www.omdbapi.com?apikey=831cd9f4"
	const [movies, setMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState("")

	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&S=${title}`)

		const data = await response.json()
		console.log(data.Search)
		setMovies(data.Search)
	}
	useEffect(() => {
		searchMovies("Sistas")
	}, [])

	return (
		<div className="app">
			<h1>Movie Dala</h1>
			{/* search  */}
			<div className="search">
				<input
					type="text"
					placeholder="Search for Movies"
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() => searchMovies(searchTerm)}
				/>
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
