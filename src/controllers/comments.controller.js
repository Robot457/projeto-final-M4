import { prismaClient } from '../database/prisma-client'

export const createComment = async (req, res) => {
  const { content, bookId, userId } = req.body
  const comment = await prismaClient.comment.create({
    data: {
      content,
      bookId,
      userId,
    },
  })
  return res.json({
    comment,
    date: new Date().toISOString(),
  })
}

export const getComment = async (req, res) => {
  const { id } = req.params
  const comment = await prismaClient.comment.findUnique({
    where: {
      id,
    },
  })

  if (!comment) {
    return res.status(400).json({
      message: 'Comentário não encontrado',
      date: new Date().toISOString(),
    })
  }

  return res.json({
    comment,
    date: new Date().toISOString(),
  })
}

export const updateComment = async (req, res) => {
  const { id } = req.params
  const { content, bookId, userId } = req.body
  const comment = await prismaClient.comment.findUnique({
    where: {
      id,
    },
  })

  if (!comment) {
    return res.status(400).json({
      message: 'Comentário não encontrado',
      date: new Date().toISOString(),
    })
  }

  const updatedComment = await prismaClient.comment.update({
    where: {
      id,
    },
    data: {
      content,
      bookId,
      userId,
    },
  })

  return res.json({
    updatedComment,
    date: new Date().toISOString(),
  })
}

export const deleteComment = async (req, res) => {
  const { id } = req.params
  const comment = await prismaClient.comment.findUnique({
    where: {
      id,
    },
  })

  if (!comment) {
    return res.status(400).json({
      message: 'Comentário não encontrado',
      date: new Date().toISOString(),
    })
  }

  await prismaClient.comment.delete({
    where: {
      id,
    },
  })

  return res.json({
    message: 'Comentário deletado com sucesso',
    date: new Date().toISOString(),
  })
}

export const getCommentsByBook = async (req, res) => {
  const { bookId } = req.params
  const comments = await prismaClient.comment.findMany({
    where: {
      bookId,
    },
  })
  return res.json({
    comments,
    date: new Date().toISOString(),
  })
}

export const getCommentsByUser = async (req, res) => {
  const { userId } = req.params
  const comments = await prismaClient.comment.findMany({
    where: {
      userId,
    },
  })
  return res.json({
    comments,
    date: new Date().toISOString(),
  })
}
