"use client"

import { LuSearch } from "react-icons/lu"

export default function SearchInput() {
	return (
		<>
			<label className="bg-ash p-2 flex has-[:focus]:outline has-[:focus]:outline-blue-500">
				<LuSearch />
				<input type="search" placeholder="Search classes" className="bg-transparent outline-none" />
			</label>
		</>
	)
}