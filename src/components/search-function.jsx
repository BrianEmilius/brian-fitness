"use client"
import SearchInput from "@/components/search-input"
import SearchResults from "@/components/search-results"
import { createContext, useState } from "react"

// prop drilling eksempel
/* export default function SearchFunction({ classes }) {
	const [searchText, setSearchText] = useState("")
	
	return (
		<>
			<SearchInput searchText={searchText} setSearchText={setSearchText} />
			<SearchResults classes={classes} searchText={searchText} />
		</>
	)
} */

export const SearchContext = createContext("")

export default function SearchFunction({classes}) {
	const [searchText, setSearchText] = useState("")
	return (
		<SearchContext.Provider value={{searchText, setSearchText}}>
			<SearchInput />
			<SearchResults classes={classes} />
		</SearchContext.Provider>
	)
}