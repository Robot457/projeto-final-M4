import { prismaClient } from '../database/prisma-client'

export const existBook = async (id) => {
  const book = await prismaClient.book.findUnique({
    where: { id },
  })

  return !!book
}
