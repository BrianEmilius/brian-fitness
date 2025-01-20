"use client"
import Login from "@/actions/login"
import { useActionState, useEffect } from "react"
import PacmanLoader from "react-spinners/PacmanLoader"

export default function LoginForm({ formVisible }) {
	const [formState, formAction, isPending] = useActionState(Login)

	useEffect(function() {
		console.log("formState", formState)
	}, [formState])

	return (
		<form action={formAction} className="flex flex-col items-center" aria-expanded={formVisible}>
			<div className="mt-[2rem] w-full">
				<label className="relative text-md">
					<input type="text" name="username" className="border peer w-full" />
					<span className="absolute left-1 top-0 peer-focus:top-[-1.5rem] peer-focus:text-[1rem] transition-all peer-not-empty:top-[-1.5rem] peer-not-empty:text-[1rem]">Username</span>
				</label>
				<span>{formState?.errors?.username?._errors}</span>
			</div>
			<div className="mt-[2rem] mb-[2rem] w-full">
				<label className="relative text-md">
					<input type="password" name="password" className="border peer w-full" />
					<span className="absolute left-1 top-0 peer-focus:top-[-1.5rem] peer-focus:text-[1rem] transition-all peer-not-empty:top-[-1.5rem] peer-not-empty:text-[1rem]">Password</span>
				</label>
				<span>{formState?.errors?.password?._errors}</span>
			</div>
			<button disabled={isPending} type="submit" className={`${isPending ? "bg-ash" : "bg-coral"} text-black font-semibold w-full px-4 py-2`}>
				{isPending && <PacmanLoader />}
				Login
			</button>
			<span>{formState?.errors}</span>
		</form>
	)
}