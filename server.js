import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
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

app.get('/data', (req, res) => {
  console.log("Accessing the data path");
  const catsData = {
    cats: [
      { name: "Whiskers", age: 3, color: "gray" },
      { name: "Mittens", age: 5, color: "white" },
      { name: "Smokey", age: 2, color: "black" },
      { name: "Luna", age: 4, color: "calico" },
      { name: "Oliver", age: 1, color: "orange" }
    ]
  };

  res.json(catsData);
  res.status(200).json(catsData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
