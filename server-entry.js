import express from 'express';
import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import User from './react/components/user.jsx';

const app = express();

module.exports = () => {
  app.use('/public', express.static('assets'));

  app.get('*', (req, res) => {
    const html = renderToString(
                                <Router context={ {} }>
                                    <User />
                                </Router>
                              );

    res.send(`
      <html>
        <head>
          <title>Emirates Coding Tests</title>
          <link rel="stylesheet" href="public/bootstrap.min.css"/>
          <link rel="stylesheet" href="public/styles.css"/>
        </head>
        <body>
          <div id="root">${html}</div>
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

  return app;
};
