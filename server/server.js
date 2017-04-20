const express     = require('express'),
      app         = express(),
      bodyParser  = require("body-parser"),
      cors        = require("cors");

// Routes
const home = require("./routes/home"),
      user = require("./routes/user"),
      article = require("./routes/article");

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Use Routes
app.use("/", home)
app.use("/user", user)
app.use("/article", article)

app.listen(3000, () => {
  console.log(`Server connected!`);
})
