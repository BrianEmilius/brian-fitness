"use client"

import { useState } from "react"

export default function SignUpButton({isSignedUp, handleSignup, handleLeave}) {
	const styling = "col-start-2 col-end-3 row-start-3 row-end-4 bg-white text-lg rounded-l-xl ml-4 my-4"
	const [signedUp, setSignedUp] = useState(isSignedUp)

	function handleClick() {
		if (signedUp) {
			setSignedUp(!signedUp)
			handleLeave()
		} else {
			setSignedUp(!signedUp)
			handleSignup()
		}
	}

	return (
		<>
			{signedUp
				? <button onClick={handleClick} className={styling}>Leave</button>
				: <button onClick={handleClick} className={styling}>Sign Up</button>}
		</>
	)
}
