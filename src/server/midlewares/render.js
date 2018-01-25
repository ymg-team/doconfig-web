export default (req, res) => {
  const html = `<!DOCTYPE html>   
  <html lang="en">
      <head>
          <meta charset="utf-8">
          <link rel="manifest" href="/manifest.json">
          <link rel="icon" href="/images/icons/icon-512x512.png">
          <link href="/libraries/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
          <link href="/css/style.css" rel="stylesheet" />
          <title>Create Config in Seconds - Doconfig</title>
          <style>
                .animate-list-move {
                    transition: transform 1s;
                }
                .animate-list-enter, .animate-list-leave-to {
                    transform: translateY(50px);
                    opacity: 0;
                }
                .animate-list-active, .animate-list-leave-active {
                    transition: transform .3s, opacity .3s ease .6s;
                }
                .page-transition-enter-active, .page-transition-leave-active {
                    transition-property: opacity, transform;
                    transition-duration: .25s;
                }
                .page-transition-enter-active {
                    transition-delay: .25s;
                }
                .page-transition-enter {
                    opacity: 0;
                }
                .page-transition-leave-active {
                    opacity: 0.5;
                }
                .page-transition-enter {
                    transform: translateY(-100%)
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
