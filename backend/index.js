const express = require("express");
const mongoose = require("mongoose");
// const {readdirSync} = require("fs");
const bodyParser = require("body-parser");
require('dotenv').config();
const cors = require("cors");
const {productRoutes} = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("***DB CONNECTED***"))
    .catch((err) => console.log("DB CONNECTION ERR =>", err));


// readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));
app.use("/api", productRoutes);
const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    }
);