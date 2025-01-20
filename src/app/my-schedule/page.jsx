import { cookies } from "next/headers"
import Link from "next/link"

export default async function MySchedule() {
	const cookieStore = await cookies()

	const token = cookieStore.get("fitness_token")
	const uid = cookieStore.get("fitness_uid")

	const response = await fetch(`http://localhost:4000/api/v1/users/${uid.value}`, {
		headers: {
			Authorization: `Bearer ${token.value}`
		}
	})
	const data = await response.json()
	
	return (
		<>
			<h1>My Schedule</h1>
			<ul>
				{data.classes.map(item => (
					<li key={item.createdAt} className="border-b-2 border-dashed">
						<Link href={`/class/${item.id}`}>
							<p className="flex justify-between">
								<span>{item.classDay}</span>
								<span>{item.classTime}</span>
							</p>
							<h2>{item.className}</h2>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
