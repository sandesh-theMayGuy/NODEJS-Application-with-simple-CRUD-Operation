import { Sequelize,DataTypes } from "sequelize";
import sequelize from "./index.js";


//defining schema for property
const property = sequelize.define('property',{
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    location : {
        type : DataTypes.STRING,
        allowNull : false
    }


},

    {

    timestamps : false,
    tableName : 'property'
    
   
    });
    
   
export default property;