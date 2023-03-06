import express from 'express';
import cors from 'cors';
import todoRouter from './todo.js'

const port = 3001;
const app = express();

// Use the JSON parsing middleware so we can access it via `req.body`
app.use(express.json());

// TODO: Attach your `todos` router here
app.use(cors())


app.get("/", (req, res) => {
  console.log(req, res);
  res.json({
    code: 200,
    message: "Hello, Express",
  });
});

app.use('/', todoRouter)

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
})