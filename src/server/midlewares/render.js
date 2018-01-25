export default (req, res) => {
  const html = `<!DOCTYPE html>   
  <html lang="en">
      <head>
          <meta charset="utf-8">
          <link rel="manifest" href="/manifest.json">
          <link rel="icon" href="/images/icons/icon-512x512.png">
          <title>Create Config in Seconds - Doconfig</title>
          <link href="/css/style.css" rel="stylesheet" />
          <style>
                .animate-list-move {
                    transition: transform 1s;
                }
                .animate-list-enter, .animate-list-leave-to {
                    transform: translateY(50px);
                    opacity: 0;
                }
                .animate-list-active, .animate-list-leave-active {
                    transition: opacity .3s;
                }
            </style>
      </head>
      <body>
          <div id="app"></div>
          <div id="alert" class="alert"></div>
          <script src="/js/app.js"></script>
          <script src="/build/vendor.js"></script>
          <script src="/build/app.js"></script>
      </body>
  </html>`

  res.send(html)
}
