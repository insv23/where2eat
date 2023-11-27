import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

export async function POST(request: NextRequest) {
  const body = await request.json()

  const existingOpt = await prisma.option.findUnique({
    where: { name: body.name },
  })

  if (existingOpt) {
    return NextResponse.json({ error: "该条目已存在" }, { status: 400 })
  }

  const newOpt = await prisma.option.create({
    data: {
      name: body.name,
    },
  })

  return NextResponse.json(newOpt, { status: 201 })
}
