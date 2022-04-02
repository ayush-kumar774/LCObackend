const express = require('express')
const followers = require("instagram-followers");

const app = express()

const bodyparser = require('body-parser')

app.set("view engine", "ejs")

app.use(bodyparser.urlencoded({ extended: false }))

app.use(bodyparser.json())
const PORT = 5000

app.get('/', (req, res) => {
    res.render('/home/havoc/Desktop/LCObackend/getfollowers/views/index',{followers:'',data:''})
})

app.post('/getfollowers', (req, res) => {
  console.log(req.body.username);

  // get followers
    
    followers(req.body.username).then((no) => {
        console.log(no);
        
        res.render('index',{followers:no,data:''})
      // 460
    });
    
  
})

app.listen(PORT, () => {
    console.log("App is listening on port 5000")
})
