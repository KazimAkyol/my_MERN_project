const express = require('express')
const router = express.Router()
const path = require('path')

// Express 5.x ve path-to-regexp 8.x, bu tür karmaşık regex pattern'lerini artık desteklemiyor:
// router.get('^/$|/index(.html)?', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
// })

router.get(['/', '/index', '/index.html'], (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router