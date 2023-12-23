const express = require("express");
const cors = require("cors");
var moment = require('moment')
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.al4mm66.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.c7vh25v.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// const verifyToken = (req, res, next) => {
//   const token = req?.cookies?.token;
//   if (!token) {
//     return res.status(401).send({ message: "unauthorized access" });
//   }
//   jwt.verify(token, process.env.USER_ACCESS_TOKEN, function (err, decoded) {
//     if (err) {
//       return res.status(401).send({ message: "unauthorized access" });
//     }
//     req.user = decoded;
//     next();
//   });
// };

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    //Sever request code
    // blogsDB collections
    //  const categoryCollection = client.db("blogsDB").collection("categories");
    //  const articleCollection = client.db("blogsDB").collection("articles");
    //  const authorCollection = client.db("blogsDB").collection("authors");
    //  const userCollection = client.db("blogsDB").collection("users");


    //blogsDBsecond Collections
    const blogCollection = client.db("blogsDBsecond").collection("blogs");
    const userCollection = client.db("blogsDBsecond").collection("users");


    // GET APIS
    app.get("/v1/blogs", async (req, res) => {
      const query = {}
      
      if(req.query.category){
        query.category = req.query.category
      }
      // console.log(query)
      const result = await blogCollection.find(query).toArray();
      res.send(result);
    });
    app.get('/v1/blogs/:id', async(req, res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await blogCollection.findOne(query)
      res.send(result)
    })
    app.get('/v1/user', async(req, res)=>{
      const email = req.query.email
      const result = await userCollection.findOne({email})
      res.send(result)
    })


    //POST APIS
    app.post('/v1/addblog', async(req, res)=>{
      const body = req.body
      const date = moment().format().split('T')
      body.postDate = date[0]
      const result = await blogCollection.insertOne(body)
      res.send(result)
    })
    app.post('/v1/user', async(req, res)=>{
      const user = req.body
      const result = await userCollection.insertOne(user)
      console.log(user)
      res.send(result)
    })

    //MODIFY APIS
    app.put('/v1/updateblog/:id', async(req, res)=>{
      const id = req.params.id
      const body = req.body
      const query = {_id: new ObjectId(id)}
      const updateDoc = {
        $set:{
          category:body.category,
          bannerImage:body.bannerImage,
          title:body.title,
          subtitle:body.subtitle,
          article:body.article,
          image:body.image
        }
      }
      console.log(body)
      // const result = await blogCollection.updateOne(query, updateDoc)
      res.send({result:'success'})
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("HELLO FROM SERVER!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
