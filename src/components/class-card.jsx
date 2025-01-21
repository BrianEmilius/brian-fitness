"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import RatingMeter from "./rating"

export default function ClassCard({ element }) {
	const [ratings, setRatings] = useState([])

	useEffect(function() {
		fetch(`http://localhost:4000/api/v1/classes/${element.id}/ratings`)
			.then(response => response.json())
			.then(data => setRatings(data))
	}, [])

	return (
			<Link href={`/class/${element.id}`}>
				<Image
					src={element.asset.url}
					width="300"
					height="300"
					alt=""
					className="w-[35vw] h-[40vw] object-cover rounded-2xl"
				/>
				<h3>{element.className}</h3>
				<RatingMeter userRatings={ratings} />
			</Link>
	)
}