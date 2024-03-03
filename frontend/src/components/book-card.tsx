type Props = {
  id: string
  title: string
  author: string
  yearOfPub: number
  sinopsis: string
}

export const BookCard = ({ id, title, author, yearOfPub, sinopsis }: Props) => {
  return (
    <div className="border shadow-md rounded-lg p-4 space-y-3 w-1/3

    hover:shadow-lg hover:shadow-blue-gray-300

    ">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p>Autor: {author}</p>
      <p>Ano de publicação: {yearOfPub}</p>
      <p>{sinopsis}</p>
    </div>
  )
}
