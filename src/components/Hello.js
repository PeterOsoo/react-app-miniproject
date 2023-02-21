import React from "react"

export const Hello = () => {
	const name = " Jaka"
	let isLoggedIn = false

	return (
		<div>
			<h3>Hello {name}</h3>
			<h4> User is logged in {isLoggedIn ? "yes" : "no"} </h4>
		</div>
	)
}
