import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

export async function GET(request: NextRequest) {
  const options = await prisma.option.findMany()
  const randomOption = options[Math.floor(Math.random() * options.length)]

  return NextResponse.json(randomOption)
}
