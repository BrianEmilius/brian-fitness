"use client"
import Link from "next/link"
import { useState } from "react"
import { LuAlignRight, LuX } from "react-icons/lu"
//import LoginForm from "./login-form"
import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"

const LoginForm = dynamic(() => import("./login-form"))

export default function Navigation({ className }) {
	const [isOpen, setIsOpen] = useState(false)
	const [formVisible, setFormVisible] = useState(false)
	const [cookies, setCookie, removeCookie] = useCookies(["fitness_token", "fitness_uid"])
	const router = useRouter()

	function clickHandler() {
		setIsOpen(!isOpen)
	}

	function showForm() {
		setFormVisible(!formVisible)
	}

	function handleLogout() {
		removeCookie("fitness_token")
		removeCookie("fitness_uid")
		router.push("/")
		clickHandler()
	}

	return (
		<>
			<button onClick={clickHandler} aria-label="Menu button" className={className}>
				<LuAlignRight />
				<span className="sr-only">Menu button</span>
			</button>
			{isOpen && (
				<nav className="h-screen bg-white absolute z-50 inset-0 text-right p-8">
					<button onClick={clickHandler} aria-label="Close menu">
						<LuX className="text-ash" size={40} />
						<span className="sr-only">Close menu</span>
					</button>

					<ul className="text-center text-lg flex flex-col gap-4">
						<li>
							<Link href="/" onClick={clickHandler}>Home</Link>
						</li>
						<li>
							<Link href="/search" onClick={clickHandler}>Search</Link>
						</li>
						{(cookies.fitness_token && cookies.fitness_uid) && <li>
							<Link href="/my-schedule" onClick={clickHandler}>My Schedule</Link>
						</li>}
						<li>
							{cookies.fitness_token && cookies.fitness_uid
								? <button onClick={handleLogout}>Log out</button>
								: <button onClick={showForm}>Log in</button>}
						</li>
					</ul>

					{formVisible && <LoginForm formvisible={formVisible} />}
				</nav>
			)}
		</>
	)
}