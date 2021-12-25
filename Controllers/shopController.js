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
        res.json(`You have saved the shop ${shop.name}.`);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getShops = async (req, res) => {
    try {
        const Shops = await Shop.find().limit(2);
        res.json(Shops);
    } catch (error) {
        console.log(error);
    }
};

exports.updateShop = async (req, res) => {
    try {
        const shop = await Shop.findById(req.params.id);
        const updates = Object.keys(req.body);
        updates.forEach(update => {
            shop[update] = req.body[update]; //shop's information = updated information
        });
        await shop.save();
        res.json(shop);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteShop = async (req, res) => {
    try {
        const shop = await Shop.findByIdAndDelete(req.params.id);
        if(!shop) {
            res.status(404).send();
        }
        res.send(`${shop.name} was deleted from the database.`)
    } catch (error) {
        console.log(error);
    }
};