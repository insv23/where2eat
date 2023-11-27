import prisma from "@/prisma/client"

export default async function Home() {
  const options = await prisma.option.findMany()
  const randomOption = options[Math.floor(Math.random() * options.length)]

  return (
    <>
      <div className="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          <div className="card glass">
            <figure>
              <img
                src="/Chekhov.jpg"
                alt="Cheknov"
              />
            </figure>
            <div className="card-body">
              <p>我讨厌抉择，这就是为什么我现在吃得这么多。</p>
              <h2 className="card-title">—— 安东・契诃夫</h2>
            </div>
          </div>
          <div className="pt-4 px-2">
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-info">去哪吃</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-info">
                {randomOption.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
