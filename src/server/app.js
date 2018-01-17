import express from 'express'

// middlewares
import render from './middlewares/render'

const app = express()
const statics = ['js', 'css', 'images', 'libraries']

// set static routes
statics.map(n => {
  app.use(`/${n}`, express.static(`${__dirname}/../../public/${n}`))
})

// set app routes
app.use('*', render)

// export default as app
export default app
