import React from "react"

const MovieCard = props => {
	const { Year, Poster, Title, Type } = props.movie1

	return (
		<div className="movie">
			<div className="">
				<p>{Year} </p>
			</div>
			<div className="">
				<img
					src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
					alt={Title}
				/>
			</div>
			<div className="">
				<span> {Type} </span>
				<h3> {Title} </h3>
			</div>
		</div>
	)
}

export default MovieCard
