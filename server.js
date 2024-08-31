import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Store the server start time
const serverStartTime = Date.now();

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

// Endpoint to get server start time
app.get('/start-time', (req, res) => {
  res.json({ startTime: serverStartTime });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
