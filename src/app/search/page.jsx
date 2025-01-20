import SearchInput from "@/components/search-input";
import Link from "next/link";

export default async function Search() {
	const response = await fetch("http://localhost:4000/api/v1/classes")
  const classes = await response.json()

	return (
		<>
			<h1>Search</h1>
			<SearchInput />
			{/* <ClassList /> */}
		</>
	)
}
