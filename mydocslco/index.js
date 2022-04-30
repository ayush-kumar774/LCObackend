const express = require('express');

const app = express();

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.get("/", (req, res) => {
                res.send("Hello from The One Who Is Hated");
        }
);


app.listen(4000, () => console.log(`Server is running at port 4000...`));