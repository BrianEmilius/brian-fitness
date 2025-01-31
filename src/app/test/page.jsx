"use client"

import { useState } from "react"
import { z } from "zod"

export default function Test() {
	const [navnStatus, setNavnStatus] = useState([])
	const [emailStatus, setEmailStatus] = useState([])

	function validateNavn(event) {
		const schema = z.string().min(2, { message: "Du skal hedde noget med mindst 2 bogstaver, ellers er du en taber" })
		const validated = schema.safeParse(event.target.value)
		if (!validated.success) {
			setNavnStatus(validated.error.errors.map(error => error.message))
		} else {
			setNavnStatus([])
		}
	}

	function validateEmail(event) {
		const schema = z.string().email({ message: "forkert formateret email, din nar" }).min(1, { message: "feltet må ikke være tomt. Så fat det dog" })
		const validated = schema.safeParse(event.target.value)
		if (!validated.success) {
			setEmailStatus(validated.error.errors.map(error => error.message))
		} else {
			setEmailStatus([])
		}
	}

	return (
		<form action="">
			<h1>Kontakt</h1>
			<div className="mb-4">
				<label className="flex flex-col">
					Navn
					<input type="text" onChange={validateNavn} name="navn" className={`border ${navnStatus.length && "border-red-600 focus:outline-red-600"}`} />
				</label>
				<p className="text-red-600">{navnStatus.join(", ")}</p>
			</div>
			<div className="mb-4">
				<label className="flex flex-col">
					Email
					<input type="email" onChange={validateEmail} name="email" className="border" />
				</label>
				<p>{emailStatus.join(", ")}</p>
			</div>
			<div className="mb-4">
				<label className="flex flex-col">
					Besked
					<textarea name="besked" className="border"></textarea>
				</label>
			</div>
			<button type="submit" className="bg-blue-600 text-white font-semibold w-full p-2">Send</button>
		</form>
	)
}
