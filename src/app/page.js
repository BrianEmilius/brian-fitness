import Link from "next/link"

export default async function Home() {

  const response = await fetch("http://localhost:4000/api/v1/classes")
  const classes = await response.json()

  return (
    <>
      <h1>Classes</h1>
      {classes.map((singleClass, i) => (
        <Link key={i} href={`/class/${singleClass.id}`}>
          <article>
            <h2>{singleClass.className}</h2>
          </article>
        </Link>
      ))}
    </>
  )
}
