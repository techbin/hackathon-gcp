const express = require('express');
const app = express();
const bssImport = require( './bsmsimport' );

app.get('/', (req, res) => {
  console.log('BSS received a request.');
  bssImport();
  res.send(`BSS Import Started. Check log for details`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('BSS listening on port', port);
});