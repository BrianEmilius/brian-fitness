"use client"
import dynamic from "next/dynamic"
//import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
//import RatingMeter from "./rating"

const Link = dynamic(() => import("next/link"), { ssr: false })
const RatingMeter = dynamic(() => import("./rating"), { ssr: false })

export default function ClassCard({ element }) {
	const [ratings, setRatings] = useState([])

	useEffect(function () {
		fetch(`https://brian-trainer-api.onrender.com/api/v1/classes/${element.id}/ratings`)
			.then(response => response.json())
			.then(data => setRatings(data))
	}, [element.id])

	return (
		<Link href={`/class/${element.id}`}>
			<Image
				// "http://localhost:4000/file-bucket/ewf5uwo45uw-lower-abs01.jpg"
				// "https://brian-trainer-api.onrender.com/file-bucket/ewf5uwo45uw-lower-abs01.jpg"
				src={element.asset.url.replace("http://localhost:4000", "https://brian-trainer-api.onrender.com")}
				width="300"
				height="300"
				alt=""
				className="w-[35vw] h-[40vw] object-cover rounded-2xl"
				placeholder="blur"
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAQAAADTdEb+AAACIklEQVR42u3SQQ0AAAjEMM6/MVyBCRI+rYRl6Sk4F2NhLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC2OJgLEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWxjIWxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlgYy1gYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY/FvAU+TFn/8Rp9JAAAAAElFTkSuQmCC"
			/>
			<h3>{element.className}</h3>
			<RatingMeter userRatings={ratings} />
		</Link>
	)
}