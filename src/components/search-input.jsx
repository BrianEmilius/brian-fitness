"use client"

import { useContext } from "react"
import { LuSearch } from "react-icons/lu"
import { SearchContext } from "./search-function"

export default function SearchInput() {
	const { searchText, setSearchText } = useContext(SearchContext)
	
	return (
		<>
			<label className="bg-ash p-2 flex has-[:focus]:outline has-[:focus]:outline-blue-500">
				<LuSearch />
				<input type="search" defaultValue={searchText} onChange={event => setSearchText(event.target.value)} placeholder="Search classes" className="bg-transparent outline-none" />
			</label>
		</>
	)
}