import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Use path.resolve to get absolute paths directly
app.get('/', (req, res) => {
  console.log("accessing the root path");
  res.sendFile(path.resolve('index.html')); // Resolves to the current working directory + 'index.html'
});

app.get('/new', (req, res) => {
  console.log("accessing the new path");
  res.sendFile(path.resolve('new.html')); // Resolves to the current working directory + 'new.html'
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
