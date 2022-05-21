const express = require('express');

const app = express();

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const fileUpload = require('express-fileupload');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());
app.use(fileUpload);

let courses = [
        {
                id: "11",
                name: "Learn ReactJS",
                price: 299
        },
        {
                id: "22",
                name: "Learn Angular",
                price: 399
        },
        {
                id: "33",
                name: "Learn Node JS",
                price: 499
        },
]

function getRandomInt(max) {
        return Math.floor(Math.random() * max) ;
} // this will return number from 0 to max - 1 in random order.

let docsObject = [];

docsObject.push(
        {
        name: "JSDoc",
        rating: "4.2"
        }
);

docsObject.push(
        {
                name: "Docusaurus",
                rating: "4.5"
        }
);

docsObject.push(
        {
                name: "apiDoc",
                rating: "4.6"
        }
);

app.get("/", (req, res) => {
                res.send("Hello from The One Who Is Hated");
        }
);

app.get("/api/v1/docs", (req, res) => {
        res.send("Hello from The Hated One's docs");
}
);

app.get("/api/v1/docobject", (req, res) => {
        res.send(docsObject[getRandomInt(docsObject.length)]);
}
);

app.get("/api/v1/courses", (req, res) => {
        res.send(courses);
}
);

app.get("/api/v1/mycourses/:courseId", (req, res) => {
        const myCourse = courses.find(course => course.id === req.params.courseId);
        res.send(myCourse);
}
);

app.post("/api/v1/addCourse", (req, res) => {
        console.log(req.body);
        courses.push(req.body);
        res.send(true);        
});

app.get("/api/v1/coursequery", (req, res) => {
        let location = req.query.location;
        let device = req.query.device;
        
        res.send({ location, device });
});

app.post("/api/v1/imageupload", (req, res) => {
        const file = req.files.file;
        let path = __dirname + "/images/" + Date.now() + ".jpg" ; 

        file.mv(path, (err) => {
                res.send(true) ;
        });
});

app.listen(4000, () => console.log(`Server is running at port 4000...`));
