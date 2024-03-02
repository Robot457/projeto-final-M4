import { PrismaClient } from '@prisma/client'

export const prismaClient = new PrismaClient()

export const createGenres = async () => {
  try {
    const GENRES = [
      'Ação',
      'Aventura',
      'Comédia',
      'Drama',
      'Fantasia',
      'Ficção científica',
      'Romance',
      'Terror',
    ]

    const genresCount = (await prismaClient.genre.findMany()).length

    if (genresCount > 0) {
      return
    }

    for (const genre of GENRES) {
      await prismaClient.genre.create({
        data: {
          name: genre,
        },
      })
    }
  } catch (error) {
    console.error(error)
    prismaClient.$disconnect()
  }
}
