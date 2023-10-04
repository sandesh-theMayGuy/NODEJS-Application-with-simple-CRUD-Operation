import express from "express";
import {findProperties, addProperty} from "../controllers/propertyController.js";

const propertyRoute = express.Router();


propertyRoute.get("/",async (req,res)=>{
    
    // const properties = await property.findAll();

    const properties = await findProperties();
    res.status(200).json(properties);
})

propertyRoute.post("/",async (req,res)=>{

    const addedProperty = await addProperty(req,res);


    const {title,location} = addedProperty;

    res.status(200).json({
        status : "Success",
        data : {
            title : `${title}`,
            location : `${location}`
        }
    })

   
});

export default propertyRoute;