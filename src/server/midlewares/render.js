export default (req, res) => {
  const html = `<!DOCTYPE html>   
  <html lang="en">
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
          <meta name="google-site-verification" content="0b8UjZ8VIWQmQQ27I5LMM6vnx4EtG1GdiaBTPOWye_8" />
          <link rel="manifest" href="/manifest.json">
          <link rel="icon" href="/images/icons/icon-512x512.png">
          <link href="/libraries/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
          <link href="/css/style.css" rel="stylesheet" />
          <title>Create Config in Seconds - Doconfig</title>
          <style>
                .animate-list-move {
                    transition: transform .5s;
                }
                .animate-list-enter-active, .animate-list-leave-active {
                    transition: all .3s;
                }
                .animate-list-enter, .animate-list-leave-to {
                    opacity: 0;
                    transform: translateY(30px);
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
