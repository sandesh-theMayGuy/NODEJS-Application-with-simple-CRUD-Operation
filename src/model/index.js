import {Sequelize} from "sequelize";

//making initial connection to the DB through connection pool


const sequelize = new Sequelize(process.env.DBNAME, process.env.USER,process.env.PASSWORD, {
    host: 'localhost',
    dialect:'mysql',
    pool : {
        max : 10,
        min : 0,
        acquire: 30000,
        idle : 10000
    }
    });


export default sequelize;