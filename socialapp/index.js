const express = require('express');
const format  = require('date-format');

const app = express();

//swagger docs related
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const PORT = process.env.PORT || 4000 ;


app.get("/", (req, res) => {
        res.status(200).send(`<h1>Hello World From Aayush!</h1>`);
})

app.get("/api/v1/instagram", (req, res) => {
       const instaSocial = {
               username: "4nshu",
               followers: "379",
               follows: "241",
               date: format.asString("dd-MM-yyyy : (hh::mm::ss)", new Date())
       } ;
       res.status(200).json({instaSocial});
})

app.get("/api/v1/twitter", (req, res) => {
        const twitterSocial = {
                username: "bitLegion",
                followers: "200",
                follows: "247",
                date: format.asString("dd-MM-yyyy : (hh::mm::ss)", new Date())
        } ;
        res.status(200).json({twitterSocial});
})

 app.get("/api/v1/linkedin", (req, res) => {
        const linkedinSocial = {
                username: "Aayush Kumar",
                followers: "330",
                follows: "274",
                date: format.asString("dd-MM-yyyy : (hh::mm::ss)", new Date())
        } ;
        res.status(200).json({linkedinSocial});
})

app.get("/api/v1/:token", (req, res) => {
	console.log(req.params.token);
	res.status(200).json({param: req.params.token});
});

app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
})



