import { prismaClient } from '../database/prisma-client'
import { existBook } from '../utils/exist-book'

export const infoAPI = (req, res) => {
  return res.json({
    api: 'API de Livros',
    version: '1.0.0',
    message: 'Uma API para gerenciar livros',
    date: new Date().toISOString(),
    author: 'Squad 1',
  })
}

export const ping = (req, res) => {
  return res.json({ message: 'pong', date: new Date().toISOString() })
}

export const health = (req, res) => {
  return res.json({
    status: 'UP',
    message: 'Tudo funcionando corretamente',
    date: new Date().toISOString(),
  })
}

export const getBooks = async (req, res) => {
  const books = await prismaClient.book.findMany()
  return res.json({
    books,
    date: new Date().toISOString(),
  })
}

export const getBookById = async (req, res) => {
  const { id } = req.params
  const book = await prismaClient.book.findUnique({
    where: { id },
  })

  if (!book) {
    return res.status(400).json({
      message: 'Livro não encontrado',
      date: new Date().toISOString(),
    })
  }

  return res.json({
    book,
    date: new Date().toISOString(),
  })
}

export const createBook = async (req, res) => {
  const { title, author, genreId, yearOfPub, sinopsis } = req.body

  const genreExists = await prismaClient.genre.findFirst({
    where: {
      id: genreId,
    },
  })

  if (!genreExists) {
    const allGenres = await prismaClient.genre.findMany({
      select: {
        id: true,
        name: true,
      },
    })

    return res.status(400).json({
      message: {
        error: 'O gênero informado não existe',
        allGenres,
      },

      date: new Date().toISOString(),
    })
  }

  const book = await prismaClient.book.create({
    data: {
      title,
      author,
      genreId,
      yearOfPub,
      sinopsis,
    },
  })

  return res.json({
    book,
    date: new Date().toISOString(),
  })
}

export const updateBook = async (req, res) => {
  const { id } = req.params
  const { title, author, genreId, yearOfPub, sinopsis } = req.body

  const bookExists = await existBook(id)

  if (!bookExists) {
    return res.status(400).json({
      message: 'Livro não encontrado',
      date: new Date().toISOString(),
    })
  }

  const genreExists = await prismaClient.genre.findFirst({
    where: {
      id: genreId,
    },
  })

  if (!genreExists) {
    const allGenres = await prismaClient.genre.findMany()

    return res.status(400).json({
      message: {
        error: 'O gênero informado não existe',
        allGenres,
      },

      date: new Date().toISOString(),
    })
  }

  const book = await prismaClient.book.update({
    where: { id },
    data: {
      title,
      author,
      genreId,
      yearOfPub,
      sinopsis,
    },
  })

  return res.json({
    book,
    date: new Date().toISOString(),
  })
}

export const deleteBook = async (req, res) => {
  const { id } = req.params

  const bookExists = await existBook(id)

  if (!bookExists) {
    return res.status(400).json({
      message: 'Livro não encontrado',
      date: new Date().toISOString(),
    })
  }

  const book = await prismaClient.book.delete({
    where: { id },
  })

  return res.json({
    book,
    date: new Date().toISOString(),
  })
}
