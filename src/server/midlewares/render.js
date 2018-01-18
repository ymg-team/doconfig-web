export default (req, res) => {
  const html = `<!DOCTYPE html>   
  <html lang="en">
      <head>
          <meta charset="utf-8">
          <title>Create Config in Seconds - Doconfig</title>
          <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body>
          <div id="app"></div>
          <script src="/build/app.js"></script>
      </body>
  </html>`

  res.send(html)
}
