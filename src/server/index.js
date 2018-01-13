import app from './app'

// server configuration
const Port = process.env.PORT || 12020

// set production env

// enable multi processing (nodejs default cluster)


app.listen(Port, () => {
    console.log(`App listen on port ${Port}`)
})