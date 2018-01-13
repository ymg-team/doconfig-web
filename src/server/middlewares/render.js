import path from 'path'
import { createRenderer } from 'vue-server-renderer' 

export default (req, res) => {
    res.send(html)
}

const html = `
<!DOCTYPE html>   
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Create Config in Seconds - Doconfig</title>
        <link href="/css/style.css" rel="stylesheet" />
    </head>
    <body>
        <div id="app"></div>
        <script src="/js/app.js"></script>
    </body>
</html>
`