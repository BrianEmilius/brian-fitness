import { NextResponse } from "next/server"

export function middleware(request) {
	const token = request.cookies.get("fitness_token")
	const uid = request.cookies.get("fitness_uid")

	if (!(token && uid)) {
		return NextResponse.redirect(new URL("/", request.url))
	}
}

export const config = {
	matcher: '/my-schedule/:path*'
}
