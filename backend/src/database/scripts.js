import { prismaClient } from './prisma-client'

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
  } finally {
    prismaClient.$disconnect()
  }
}

export const createBooks = async () => {
  try {
    const booksData = [
      {
        title: 'O Senhor dos Anéis',
        author: 'J. R. R. Tolkien',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1954,
        sinopsis:
          'O Senhor dos Anéis (The Lord of the Rings, no original) é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit (1937).',
      },
      {
        title: 'Harry Potter e a Pedra Filosofal',
        author: 'J.K. Rowling',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1997,
        sinopsis:
          'Harry Potter e a Pedra Filosofal é o primeiro livro da série Harry Potter, de J. K. Rowling. Foi publicado pela primeira vez em 1997, no Reino Unido, e em 2000, nos Estados Unidos. O livro introduz a vida do jovem bruxo Harry Potter, que descobre ser um bruxo ao completar onze anos e é convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.',
      },
      {
        title: 'Dom Quixote',
        author: 'Miguel de Cervantes',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1605,
        sinopsis:
          'Dom Quixote de La Mancha é um livro escrito pelo espanhol Miguel de Cervantes e publicado em 1605. É considerado uma das obras mais importantes da literatura espanhola e uma das mais influentes da literatura mundial. A história acompanha as aventuras de um fidalgo que enlouquece ao ler livros de cavalaria e sai em busca de aventuras ao lado de seu fiel escudeiro, Sancho Pança.',
      },
      {
        title: 'A Metamorfose',
        author: 'Franz Kafka',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1915,
        sinopsis:
          'A Metamorfose é uma novela escrita por Franz Kafka, publicada em 1915. A história acompanha Gregor Samsa, um caixeiro-viajante que acorda uma manhã transformado em um inseto monstruoso. A obra explora temas como alienação, solidão e a estranheza da condição humana.',
      },
      {
        title: 'Cem Anos de Solidão',
        author: 'Gabriel García Márquez',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1967,
        sinopsis:
          'Cem Anos de Solidão é um romance escrito pelo colombiano Gabriel García Márquez e publicado em 1967. A história acompanha a saga da família Buendía ao longo de várias gerações em Macondo, uma cidade fictícia na América Latina. A obra é conhecida por sua prosa poética, realismo mágico e complexidade narrativa.',
      },
      {
        title: '1984',
        author: 'George Orwell',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1949,
        sinopsis:
          '1984 é um romance distópico escrito pelo britânico George Orwell e publicado em 1949. A obra descreve um futuro totalitário onde um governo autoritário, liderado pelo Grande Irmão, controla todos os aspectos da vida dos cidadãos, incluindo seus pensamentos e sentimentos.',
      },
      {
        title: 'Orgulho e Preconceito',
        author: 'Jane Austen',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1813,
        sinopsis:
          'Orgulho e Preconceito é um romance escrito pela autora britânica Jane Austen e publicado em 1813. A história acompanha os encontros e desencontros entre Elizabeth Bennet, uma jovem inteligente e perspicaz, e Mr. Darcy, um homem rico e arrogante. O livro aborda temas como amor, casamento, classe social e preconceito.',
      },
      {
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-Exupéry',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1943,
        sinopsis:
          'O Pequeno Príncipe é um livro escrito pelo francês Antoine de Saint-Exupéry e publicado em 1943. A história acompanha as aventuras de um jovem príncipe que viaja de planeta em planeta, encontrando personagens peculiares e refletindo sobre questões da vida e da humanidade.',
      },
      {
        title: 'A Divina Comédia',
        author: 'Dante Alighieri',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1320,
        sinopsis:
          'A Divina Comédia é uma obra épica escrita pelo italiano Dante Alighieri no século XIV. Dividida em três partes (Inferno, Purgatório e Paraíso), a obra narra a jornada de Dante através do inferno, purgatório e paraíso, representando uma viagem simbólica da alma em direção à redenção.',
      },
      {
        title: 'A Guerra dos Tronos',
        author: 'George R. R. Martin',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1996,
        sinopsis:
          'A Guerra dos Tronos é o primeiro livro da série de fantasia épica As Crônicas de Gelo e Fogo, escrita pelo autor norte-americano George R. R. Martin e publicado em 1996. A história acompanha a luta pelo poder entre as casas nobres dos Sete Reinos de Westeros, ambientada em um mundo de magia, intriga política e conspirações.',
      },
      {
        title: 'Moby Dick',
        author: 'Herman Melville',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1851,
        sinopsis:
          'Moby Dick é um romance escrito pelo autor norte-americano Herman Melville e publicado em 1851. A história acompanha a obsessão do capitão Ahab em caçar e matar uma baleia branca gigante chamada Moby Dick, levando sua tripulação a uma jornada épica pelos mares do mundo.',
      },
      {
        title: 'O Hobbit',
        author: 'J. R. R. Tolkien',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1937,
        sinopsis:
          'O Hobbit é um romance de fantasia escrito pelo britânico J. R. R. Tolkien e publicado em 1937. A história segue as aventuras do hobbit Bilbo Bolseiro, que é convocado pelo mago Gandalf para ajudar um grupo de anões a recuperar seu tesouro roubado pelo dragão Smaug.',
      },
      {
        title: 'A Revolução dos Bichos',
        author: 'George Orwell',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1945,
        sinopsis:
          'A Revolução dos Bichos é uma novela alegórica escrita pelo britânico George Orwell e publicada em 1945. A história retrata os acontecimentos de uma fazenda onde os animais se revoltam contra seus donos humanos, estabelecendo um regime de igualdade entre eles, mas eventualmente se vêem dominados por uma elite corrupta.',
      },
      {
        title: 'Anna Karenina',
        author: 'Lev Tolstói',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 1877,
        sinopsis:
          'Anna Karenina é um romance escrito pelo autor russo Lev Tolstói e publicado em 1877. A história acompanha os relacionamentos e dramas pessoais de diversas personagens, com destaque para a aristocrata Anna Karenina, que se envolve em um caso extraconjugal com o oficial Alexei Vronski.',
      },
      {
        title: 'O Código Da Vinci',
        author: 'Dan Brown',
        genreId: '026297d8-df90-4c08-ba4c-1466c6d405f9',
        yearOfPub: 2003,
        sinopsis:
          'O Código Da Vinci é um romance policial escrito pelo autor norte-americano Dan Brown e publicado em 2003. A história segue o simbologista Robert Langdon em uma investigação que o leva a descobrir segredos milenares envolvendo a Igreja Católica, a obra de Leonardo da Vinci e a busca pelo Santo Graal.',
      },
    ]

    const booksCount = (await prismaClient.book.findMany()).length

    if (booksCount > 0) {
      return
    }

    for (const book of booksData) {
      const result = await prismaClient.book.create({
        data: {
          author: book.author,
          title: book.title,
          sinopsis: book.sinopsis,
          yearOfPub: book.yearOfPub,
          genreId: book.genreId,
        },
      })

      console.log('Created book with ID:', result.id)
    }
  } catch (error) {
    console.error(error)
  } finally {
    prismaClient.$disconnect()
  }
}
