"use client"

import { useEffect } from "react"

export default function Error({ error, reset }) {
	useEffect(function () {
		console.error(error)
	}, [error])

	return (
		<>
			<h1>Dude, where's my error?</h1>
			<p>Something terrible happened and your computer will self destruct in 5 seconds.</p>
			<button onClick={() => reset()}>Try again</button>
		</>
	)
}
