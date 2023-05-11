const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 5000
const connectDB = require("./database/db");
const multer = require("multer");

app.use('/assets',express.static('assets'))
var myfileName = "";
const fileName = (file) => {
	myfileName = Date.now() + "." + file.mimetype.split("/")[1];
	return myfileName;
};
// const upload = multer({ dest: 'assets/' })
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "assets/");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "." + file.mimetype.split("/")[1]);
	},
	filename: (req, file, cb) => {
		cb(null, fileName(file));
	},
});
const upload = multer({ storage });


app.use(cors())
app.use(bodyParser.json())
connectDB();
//import Model
const UserModel = require("./models/newsModel")

// for creating the API
app.post("/create", upload.single("image"),(req,res)=>{
    const { title,description , category } = req.body;
    const image = req.file.filename;
    const user = UserModel({ title, description, category, image });
    user.save().then((used)=>{
        res.status(200).send(used)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
})
// For getting the data from datdabase
app.get("/show",async(req,res)=>{
    try{
        const data = await UserModel.find();
        res.status(200).send(data)
    }
    catch(err){
        res.send(500).send(err)
    }
})

//for getting selected id
app.get("/get/:id",(req,res)=>{
    const id = req.params.id;

    UserModel.findById(id,(err,user)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(user)
        }
    })
})

//for deleting the Api
app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;

    UserModel.findByIdAndRemove(id,(err,user)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send("Deleted Sucessfully")
        }
    })
})
// for updating the Api

app.put("/get/:id",(req,res)=>{
    const id=req.params.id
    UserModel.findById(id,(err,user)=>{
        if (err){
            console.log("api failed")
        }else{
            user.title=req.body.title;
            user.description=req.body.description;
            user.category=req.body.category;
            user.image=req.body.image
            user.save().then((user)=>{
                res.status(200).send(user)
             }).catch((err)=>{
                res.status(500).send(err.message);
             })   
        }
    })
})


app.get("/",(req,res)=>{
    res.send("Weelcome to Node Js")
})






app.listen(port,()=>{
    console.log("Node server is running " + port)
})