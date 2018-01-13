const express = require('express');

app.get('*', (req, res) => {
  res.send({'jlab': rocks});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);