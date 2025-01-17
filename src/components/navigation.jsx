"use client"
import Link from "next/link"
import { useState } from "react"
import { LuAlignRight, LuX } from "react-icons/lu"
import LoginForm from "./login-form"

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const [formVisible, setFormVisible] = useState(false)

	function clickHandler() {
		setIsOpen(!isOpen)
	}

	function showForm() {
		setFormVisible(!formVisible)
	}

	return (
		<>
			<button onClick={clickHandler} aria-label="Menu button">
				<LuAlignRight />
				<span className="sr-only">Menu button</span>
			</button>
			{isOpen && (
				<nav className="h-screen bg-white absolute z-50 inset-0 text-right p-8" aria-expanded={isOpen}>
					<button onClick={clickHandler} aria-label="Close menu">
						<LuX className="text-ash" size={40} />
						<span className="sr-only">Close menu</span>
					</button>

					<ul className="text-center text-lg flex flex-col gap-4">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/">Search</Link>
						</li>
						<li>
							<Link href="/">My Schedule</Link>
						</li>
						<li>
							<button onClick={showForm}>Login</button>
						</li>
					</ul>

					{formVisible && <LoginForm formvisible={formVisible} />}
				</nav>
			)}
		</>
	)
}