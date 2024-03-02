import { prismaClient } from '../database/prisma-client'

export const createUser = async (req, res) => {
  const { name, email, password, urlPhoto } = req.body
  const userExists = await prismaClient.user.findFirst({
    where: {
      email,
    },
  })

  if (userExists) {
    return res.status(400).json({
      message: 'Usuário já existe',
      date: new Date().toISOString(),
    })
  }

  const user = await prismaClient.user.create({
    data: {
      name,
      email,
      password,
      urlPhoto,
    },
  })
  return res.json({
    user,
    date: new Date().toISOString(),
  })
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const user = await prismaClient.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return res.status(400).json({
      message: 'Usuário não encontrado',
      date: new Date().toISOString(),
    })
  }

  return res.json({
    user,
    date: new Date().toISOString(),
  })
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, password, urlPhoto } = req.body
  const user = await prismaClient.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return res.status(400).json({
      message: 'Usuário não encontrado',
      date: new Date().toISOString(),
    })
  }

  const userUpdated = await prismaClient.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      password,
      urlPhoto,
    },
  })
  return res.json({
    userUpdated,
    date: new Date().toISOString(),
  })
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  const user = await prismaClient.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return res.status(400).json({
      message: 'Usuário não encontrado',
      date: new Date().toISOString(),
    })
  }

  await prismaClient.user.delete({
    where: {
      id,
    },
  })
  return res.json({
    message: 'Usuário deletado com sucesso',
    date: new Date().toISOString(),
  })
}

export const getAllUsers = async (req, res) => {
  const users = await prismaClient.user.findMany()
  return res.json({
    users,
    date: new Date().toISOString(),
  })
}
