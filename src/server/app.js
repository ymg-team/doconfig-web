import express from 'express'
import render from './midlewares/render'

const app = express()

// set app routes
const statics = ['js', 'css', 'images', 'libraries', 'build']
statics.map(n => {
  app.use(`/${n}`, express.static(`${__dirname}/../../public/${n}`))
})
app.use('*', render)

// export default as app
export default app
