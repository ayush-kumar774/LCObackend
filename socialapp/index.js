const express = require('express');
const format  = require('date-format');

const app = express();

const PORT = 4000 || process.env.PORT ;

app.get("/", (req, res) => {
        res.status(200).send(`<h1>Hello World!</h1>`);
})

app.get("/api/v1/instagram", (req, res) => {
       const instaSocial = {
               username: "4yushrajput",
               followers: "39",
               follows: "24",
               date: format.asString("dd-MM-yyyy : (hh::mm::ss)", new Date())
       } ;
       res.status(200).json({instaSocial});
})

app.get("/api/v1/twitter", (req, res) => {
        const twitterSocial = {
                username: "4yushrajput",
                followers: "39",
                follows: "24",
                date: format.asString("dd-MM-yyyy : (hh::mm::ss)", new Date())
        } ;
        res.status(200).json({twitterSocial});
 })

 app.get("/api/v1/linkedin", (req, res) => {
        const linkedinSocial = {
                username: "4yushrajput",
                followers: "39",
                follows: "24",
                date: format.asString("dd-MM-yyyy : (hh::mm::ss)", new Date())
        } ;
        res.status(200).json({linkedinSocial});
 })

app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
})



