const Shop = require("../Models/shops");

exports.homePage = async (req, res) => { //when the user requests localhost:3000/ an async function will run
    const stores = ["Target", "GameStop", "Five Below"];
    try {
        res.json(stores);
        console.log(req.name);
        // res.send("Here is the student");
        // res.send(`${student.name} is ${student.age} years old. If you were to call him a weeb, you would be ${student.isWeeb}.`);
    } catch (error) {
        console.log(error);
    }
};

exports.createShop = async (req, res) => {
    try {
        const shop = new Shop(req.body);
        await shop.save();
        res.json(`You have saved the shop ${shop}.`);
    } catch (error) {
        res.status(500).json(error);
    }
};