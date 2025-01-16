import RatingMeter from "@/components/rating"
import Image from "next/image"

export default async function Class({ params }) {
	const { id } = await params

	const classResponse = await fetch(`http://localhost:4000/api/v1/classes/${id}`)
	const data = await classResponse.json()
	const ratingResponse = await fetch(`http://localhost:4000/api/v1/classes/${id}/ratings`)
	const ratings = await ratingResponse.json()
	
	return (
		<>
			<Image src={data.asset.url} width="100" height="100" alt="" />
			<h1>{data.className}</h1>
			<RatingMeter userRatings={ratings} />
		</>
	)
}
