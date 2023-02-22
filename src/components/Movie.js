import { useEffect } from "react"

import SearchIcon from "../search.svg"

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

	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&S=${title}`)

		const data = await response.json()
		console.log(data.Search)
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
					value="Bad"
					onChange={() => {}}
				/>
				<img src={SearchIcon} alt="search" onClick={() => {}} />
			</div>

			{/* container  */}
			<div className="container">
				<div className="movie">
					<div className="">
						<p>{movie1.Year} </p>
					</div>
					<div className="">
						<img
							src={
								movie1.Poster !== "N/A"
									? movie1.Poster
									: "https://via.placeholder.com/400"
							}
							alt={movie1.title}
						/>
					</div>
					<div className="">
						<span> {movie1.Type} </span>
						<h3> {movie1.Title} </h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Movie
