const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRouter');

const app = express();

// MIDDLEWARE
app.use(express.json());

// CONNECTION WITH MONGODB

const DB = "mongodb://bhavyatiwari917:bUAnNasGybmvoDku@ac-hb0tjin-shard-00-00.e9gc908.mongodb.net:27017,ac-hb0tjin-shard-00-01.e9gc908.mongodb.net:27017,ac-hb0tjin-shard-00-02.e9gc908.mongodb.net:27017/E-Commerce-API?ssl=true&replicaSet=atlas-al64pi-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(DB , connectionParams).then(() => {
    console.log('DB connection successful');
}).catch((err) => {
    console.log('Error' , err);
})


// MOUNTING THE ROUTERS
app.use('/api/v1/products' , productRouter);



const port = 4000;
const server = app.listen(port, ()=> {
    console.log(`App running on port ${port}...`);
});

