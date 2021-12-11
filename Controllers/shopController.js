exports.middlewareSample = (req, res, next) => {
    req.name = "test";
    next();
};

exports.homePage = async (req, res) => { //when the user requests localhost:3000/ an async function will run
    const stores = ["Target", "GameStop", "Five Below"];
    try {
        // res.json(stores);
        res.send(req.name);
        // res.send("Here is the student");
        // res.send(`${student.name} is ${student.age} years old. If you were to call him a weeb, you would be ${student.isWeeb}.`);
    } catch (error) {
        console.log(error);
    }
};

exports.authMiddleware = async (req, res, next) => {
    if (req.body.user) {
        next();
    } else {
        res.json("You must be signed in.")
    }
}

exports.authPage = async (req, res) => {
    try {
        res.json(req.body.user + "'s secret data");
    } catch (error) {
        console.log(error)
    }
}