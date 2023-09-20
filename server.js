const express = require('express');
const path = require('path');
const app = express();

// This configures static hosting for files in /public that have the extensions
// listed in the array.
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false,
};

// Serve static files from the 'build' directory
app.use(express.static('build', options));

// Serve static files from the '/welcome' directory
app.use('/welcome', express.static('welcome', options));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`);
});
