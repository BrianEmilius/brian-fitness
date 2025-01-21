"use client"

import { useContext } from "react"
import { SearchContext } from "./search-function"
//import ClassCard from "./class-card"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/bundle"
import dynamic from "next/dynamic"
import { HashLoader } from "react-spinners"

const ClassCard = dynamic(() => import("./class-card"), {
	loading: () => <HashLoader />
})

export default function SearchResults({ classes }) {
	const { searchText } = useContext(SearchContext)
	/* [{
		className: "weights, weights, weights",
		classDay: "wednesday",
		trainer: { trainerName: "Jørgen" },
		description: "dette er et tissemyre hold"
	}] */

	const results = classes.filter(function(element) {
		if (element.className.toLowerCase().includes(searchText.toLowerCase())) return element
		if (element.classDescription.toLowerCase().includes(searchText.toLowerCase())) return element
		if (element.classDay.toLowerCase().includes(searchText.toLowerCase())) return element
		if (element.trainer.trainerName.toLowerCase().includes(searchText.toLowerCase())) return element
	})

	return (
		<>
			<h2>Popular classes</h2>
			<Swiper slidesPerView={2.6}>
				{results.length > 0 ? results.map(element => (
					<SwiperSlide key={element.createdAt}>
						<ClassCard element={element} />
					</SwiperSlide>
				)) : <li>Your search did not give any results. Try to search for something else.</li>}
			</Swiper>
		</>
	)
}