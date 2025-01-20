"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import z from "zod"

export default async function Login(formState, formData) {
	const [username, password] = formData.values()

	const schema = z.object({
		username: z.string().min(1, { message: "Please enter a username" }),
		password: z.string().min(1, { message: "Please enter a password" })
	})

	const validated = schema.safeParse({ username, password })

	if (!validated.success) {
		const errors = validated.error.format()
		
		return {
			success: false,
			formData: {
				username,
				password
			},
			errors
		}
	}

	const response = await fetch("http://localhost:4000/auth/token", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			username,
			password
		})
	})

	if (response.status === 401) {
		return {
			success: false,
			errors: ["Invalid username or password"]
		}
	}

	if (response.statusText === "OK") {
		// håndter token, gem i cookie
		const data = await response.json()
		const cookieStore = await cookies()

		const expires = new Date(data.validUntil)

		cookieStore.set("fitness_uid", data.userId, { expires })
		cookieStore.set("fitness_token", data.token, { expires })

		redirect("/my-schedule")
	}
}
