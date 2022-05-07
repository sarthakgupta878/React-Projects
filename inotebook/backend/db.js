const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:z3BstGcDVsnkMGks@cluster0.gjzsc.mongodb.net/iNotebook?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo db atlas Succesfully")
    })

}

module.exports = connectToMongo;
