const mongoose = require("mongoose");
const User = require("./models/User");

class Controller {

    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(
                "mongodb+srv://AndresSaavedra:<password>@envedar.bmvu6o4.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }
            );
            console.log("Connected databases.");
        } catch (e) {
            console.error(e);
        }
    }

    getUsers() {
        User.find({}, (err, users) => {
            if (err) throw err;
            res.send(users);
        })
    }
}
exports.controller = new Controller();