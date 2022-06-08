const app = require('./app');
const {PORT} = process.env; // process.env.PORT

app.listen(PORT||4000, () => console.log(`Server is running at port ${PORT}...`));