import SearchFunction from "@/components/search-function"
import TrainerList from "@/components/trainer-list"

export const metadata = { title: "Search" }

export default async function Search() {
	const classResponse = await fetch("https://brian-trainer-api.onrender.com/api/v1/classes")
	const classes = await classResponse.json()

	const trainerResponse = await fetch("https://brian-trainer-api.onrender.com/api/v1/trainers")
	const trainers = await trainerResponse.json()

	return (
		<>
			<h1>Search</h1>
			<SearchFunction classes={classes} />
			<TrainerList trainers={trainers} />
		</>
	)
}
