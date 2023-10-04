import property from "../model/propertyModel.js";

async function findProperties(){
    const properties = await property.findAll();
    return properties;
}

async function addProperty(req,res){
    const {title,location} = req.body;

    //creating new property instance from the dataOtitle,location) provided in request body

    const propertyInstance = await property.create({
      title : title,
      location : location
    });

    return propertyInstance;
  
}

export {findProperties,addProperty};