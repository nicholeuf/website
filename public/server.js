const path = require('path');
const compression = require('compression');
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

// app.use(function enforceSecure(req, res, next) {
//   if (req.get('X-Forwarded-Proto') !== 'https') {
//     return res.redirect('https://' + req.get('Host') + req.url);
//   }
//
//   return next();
// });

// compress all responses
app.use(compression())
app.use(express.static('static'));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Application listening on port %s', port);
});
