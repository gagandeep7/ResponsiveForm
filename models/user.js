let moongoose = require("mongoose")
let UserSchema = new moongoose.Schema({
    name : String,
    email : String,
    company : String,
    phone : String,
    message : String

});
let UserModel = moongoose.model("User",UserSchema)
module.exports =  UserModel