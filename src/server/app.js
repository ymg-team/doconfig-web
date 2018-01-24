import express from 'express'
import render from './midlewares/render'
// import webpack from './midlewares/webpack'

const app = express()

// global middlewares
// app.use(webpack)

// set app routes
const statics = ['js', 'css', 'images', 'libraries', 'build']
statics.map(n => {
  app.use(`/${n}`, express.static(`${__dirname}/../../public/${n}`))
})
app.use('/manifest.json', express.static(`${__dirname}/../../public/manifest.json`))
app.use('*', render)

// export default as app
export default app
