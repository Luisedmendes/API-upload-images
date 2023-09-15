const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main(){
    await mongoose.connect('mongodb+srv://user2:jVN67Tt5qUXHSIij@cluster0.mgzxiym.mongodb.net/');
    console.log("Connected");
}

main().catch((err) => console.log(err));


module.export = main;