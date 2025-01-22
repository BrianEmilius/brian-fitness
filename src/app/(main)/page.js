import Link from "next/link"

export default async function Home() {

  const response = await fetch("https://brian-trainer-api.onrender.com/api/v1/classes")
  const classes = await response.json()

  //throw new Error("BLARGH!!")

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
