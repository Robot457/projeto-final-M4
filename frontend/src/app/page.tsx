import { BookCard } from '@/components/book-card'
import { fetchBooks } from '@/services/fetch-books'

export default async function Home() {
  let books = []
  try {
    const output = await fetchBooks()
    books.push(...output.books)
  } catch (error) {
    books = []
  }

  return (
    <div className="flex flex-col min-h-screen py-2">
      <h1 className="mt-3 text-4xl font-bold text-center">
        Seja bem-vindo ao nosso site de livros
      </h1>

      <p className="text-center mt-3">
        Aqui você encontra os melhores livros para ler
      </p>

      <div className="flex flex-wrap justify-center mt-8 gap-10">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            yearOfPub={book.yearOfPub}
            sinopsis={book.sinopsis}
          />
        ))}

        {books.length === 0 && (
          <div>
            <p className="text-gray-500 text-center">Nenhum livro encontrado</p>
            <p className="text-red-500 text-center mt-3">
              Verifique se o servidor está rodando
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
