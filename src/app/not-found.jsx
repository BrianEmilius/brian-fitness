import Link from "next/link";

export default function NotFound() {
	return (
		<>
			<h1>Oops</h1>
			<p>It looks like this page doesn&rsquo;t exist. <Link href="/search">Try our search function</Link>.</p>
		</>
	)
}