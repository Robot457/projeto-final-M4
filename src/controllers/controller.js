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
