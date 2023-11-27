import Item from "@/components/Item"
import prisma from "@/prisma/client"

export default async function Home() {
  const options = await prisma.option.findMany()

  return (
    <>
      <h1>去哪吃?</h1>
      {options.map((opt) => (
        <div key={opt.id}>
          <Item name={opt.name} />
        </div>
      ))}
    </>
  )
}
