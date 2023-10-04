import express from "express";
import "dotenv/config";
import sequelize from "./src/model/index.js";
import propertyRoute from "./src/routes/propertyRoute.js";
import cors from "cors";
import validateToken from "./src/middlewares/validateToken.js";


const app = express();
const port = process.env.PORT || 8000;

//defining routes

app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
    
});


//express.json() middleware used to send json response
app.use(express.json());

//using CORS to send request to localhost from client
app.use(cors());

//using validateToken middleware for token validation

app.use(validateToken);

//using propertyRoute for requests related to property
app.use("/property",propertyRoute);




//make database connection through connection pooling before server starts at specified port
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');


  //once the connection is made to DB, start the server at specified port    
    app.listen(port, (err) => {
      if(err){
        console.log(`Could not start the server...Error message : ${err}`);

      }
      else{
      console.log(`Server is running on port ${port}`);
      
      }
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });





