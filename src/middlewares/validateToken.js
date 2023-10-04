export default function validateToken(req,res,next){
    if(req.headers.token===process.env.TOKEN){
            next();
    }else{
        res.status(503).json({
            status:"Failed",
            message:"Invalid Token"
        })
    }
}