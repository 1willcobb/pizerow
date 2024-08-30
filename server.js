import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Use path.resolve to get absolute paths directly
app.get('/', (req, res) => {
  console.log("Accessing the root path");
  res.status(200).sendFile(path.resolve('index.html'), (err) => {
    if (err) {
      console.error("Error sending index.html:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get('/new', (req, res) => {
  console.log("Accessing the new path");
  res.status(200).sendFile(path.resolve('new.html'), (err) => {
    if (err) {
      console.error("Error sending new.html:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
