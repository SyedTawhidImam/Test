const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser())



const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.al4mm66.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.USER_ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

   //Sever request code
   const categoryCollection = client.db("blogsDB").collection("categories");
   const articleCollection = client.db("blogsDB").collection("articles");
   const authorCollection = client.db("blogsDB").collection("authors");
   const userCollection = client.db("blogsDB").collection("users");

   app.get("/categories", async (req, res) => {
    const result = await categoryCollection.find().toArray();
    res.send(result);
  });

   app.get("/articles", async (req, res) => {
    const result = await articleCollection.find().toArray();
    res.send(result);
  });

   app.get("/authors", async (req, res) => {
    const result = await authorCollection .find().toArray();
    res.send(result);
  });

   app.get("/users", async (req, res) => {
    const result = await userCollection.find().toArray();
    res.send(result);
  });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})