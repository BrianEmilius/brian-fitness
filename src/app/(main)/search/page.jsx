import SearchFunction from "@/components/search-function"

export const metadata = { title: "Search" }

export default async function Search() {
	const response = await fetch("https://brian-trainer-api.onrender.com/api/v1/classes")
	const classes = await response.json()

	return (
		<>
			<h1>Search</h1>
			<SearchFunction classes={classes} />
		</>
	)
}
