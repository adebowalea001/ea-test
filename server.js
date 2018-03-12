const express = require('express');
const app = express();

app.use('/public', express.static('assets'));

app.get('*', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Emirates Coding Tests</title>
        <link rel="stylesheet" href="public/bootstrap.min.css"/>
        <link rel="stylesheet" href="public/styles.css"/>
      </head>
      <body>
        <div id="root"></div>
      </body>
      <script src="public/react-bundle.js""></script>
    </html>
  `);
});

app.post('/get_user_details', (req, res) => {
  console.log("req.url: ", req.url);

  res.json({
    username: "Amilea",
    contract: "Consultant",
    country: "uk"
  });
});

app.listen(3000);
