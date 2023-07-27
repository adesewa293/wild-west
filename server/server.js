const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const survive = require("./library/survive")
const maths = require("./library/maths")

app.get("/", (request, response)=>{
 response.json('you found my root document')

});

app.get("/survive", survive);

app.get("/maths", maths);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
