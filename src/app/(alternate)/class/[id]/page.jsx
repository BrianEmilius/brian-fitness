import Navigation from "@/components/navigation"
import RatingMeter from "@/components/rating"
import SignUpButton from "@/components/sign-up-button"
import { cookies } from "next/headers"
import Image from "next/image"

export async function generateMetadata({ params }) {
	const id = (await params).id
	const classResponse = await fetch(`https://brian-trainer-api.onrender.com/api/v1/classes/${id}`)
	const data = await classResponse.json()

	return {
		title: data.className
	}
}

export default async function Class({ params }) {
	const { id } = await params

	const classResponse = await fetch(`https://brian-trainer-api.onrender.com/api/v1/classes/${id}`)
	const data = await classResponse.json()
	const ratingResponse = await fetch(`https://brian-trainer-api.onrender.com/api/v1/classes/${id}/ratings`)
	const ratings = await ratingResponse.json()

	const cookieStore = await cookies()
	const token = cookieStore.get("fitness_token")
	const uid = cookieStore.get("fitness_uid")

	const isSignedUp = data.users.some(user => user.id == uid.value)

	async function handleLeave() {
		"use server"
		const response = await fetch(`https://brian-trainer-api.onrender.com/api/v1/users/${uid.value}/classes/${data.id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token.value}`
			}
		})
	}

	async function handleSignup() {
		"use server"
		const response = await fetch(`https://brian-trainer-api.onrender.com/api/v1/users/${uid.value}/classes/${data.id}`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token.value}`
			}
		})
	}

	return (
		<>
			<div className="grid grid-cols-2 grid-rows-3">
				<Image priority src={data.asset.url.replace("http://localhost:4000", "https://brian-trainer-api.onrender.com")} width="4992" height="3328" alt="" className="w-full col-start-1 row-start-1 col-end-3 row-end-4" />
				<Navigation className="mt-4 mr-4 self-start justify-self-end col-start-2 col-end-3 row-start-1 row-end-2" />
				<div className="col-start-1 col-end-2 row-start-3 row-end-4">
					<h1>{data.className}</h1>
					<RatingMeter userRatings={ratings} />
				</div>
				{(token && uid) && <SignUpButton
					handleLeave={handleLeave}
					handleSignup={handleSignup}
					isSignedUp={isSignedUp}
				/>}
			</div>
			<p>
				{data.classDay}
			</p>
			<p>
				<small>
					{data.classTime}
				</small>
			</p>
			<p>{data.classDescription}</p>
		</>
	)
}
