import { BASE_API } from '@/constant/base-api'

export interface Book {
  id: string
  title: string
  author: string
  yearOfPub: number
  sinopsis: string
  createdAt: string
  updatedAt: string
  genreId: string
}

export interface Root {
  books: Book[]
  date: string
}

export const fetchBooks = async () => {
  const response = await fetch(`${BASE_API}/livros`, {
    cache: 'no-cache'
  })
  const data = (await response.json()) as Root
  return data
}
