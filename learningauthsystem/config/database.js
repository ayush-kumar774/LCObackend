const mongoose = require('mongoose')

const {MONGOOSE_URL} = process.env

exports.connect = () => {
        mongoose.connect(process.env.MONGOOSE_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        })
        .then(
                console.log(`DB CONNECTED SUCCESSFULLY`)
        )
        .catch(error => {
                console.log(`DB CONNECTION FAILED`);
                console.log(error);
                process.exit(1);
        });
};