"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import z from "zod"

export default async function Login(formState, formData) {
	const [username, password] = formData.values()

	console.log("formData", username, password)

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

	const response = await fetch("https://brian-trainer-api.onrender.com/auth/token", {
		signal: AbortSignal.timeout(30000),
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

	if (response.status === 200) {
		// håndter token, gem i cookie
		const data = await response.json()
		const cookieStore = await cookies()

		const expires = new Date(data.validUntil)

		cookieStore.set("fitness_uid", data.userId, { expires })
		cookieStore.set("fitness_token", data.token, { expires })

		redirect("/my-schedule")
	} else {
		console.error("NÆH!!", response.statusText)
		throw new Error("Auth error")
	}
}
