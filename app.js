let express = require("express")
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let User  = require('./models/user')
let app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
// database
mongoose.connect("mongodb+srv://gag7:ronaldo786@yelp-ixz5i.mongodb.net/form?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




app.get("*", function(req, res) {
    
    res.render("show.ejs")

    })

app.post("/form",function(req,res){
    console.log(typeof(req.body.data))
    User.create(req.body.data,function(err,user){
        if(err)
        {
            console.log(err)
        }
        console.log(user)
        res.send("response is submitted")

})
})

app.listen(process.env.PORT||3000,function(){
    console.log("serve on port 3000");
});