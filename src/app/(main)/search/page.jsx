import SearchFunction from "@/components/search-function"

export const metadata = { title: "Search" }

export default async function Search() {
	const response = await fetch("http://localhost:4000/api/v1/classes")
	const classes = await response.json()

	return (
		<>
			<h1>Search</h1>
			<SearchFunction classes={classes} />
		</>
	)
}
