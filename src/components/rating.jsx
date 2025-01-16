"use client"

export default function RatingMeter({ userRatings }) {
	const ratingSum = userRatings.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0)
	const actualRating = ratingSum / userRatings.length

	function clickHandler() {
		alert("Hej")
	}

	return (
		<>
			<button onClick={clickHandler}><p>Rating: {actualRating}</p></button>
		</>
	)
}
