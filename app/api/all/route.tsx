import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"

export async function GET(request: NextRequest) {
  const options = await prisma.option.findMany()

  return NextResponse.json(options)
}
