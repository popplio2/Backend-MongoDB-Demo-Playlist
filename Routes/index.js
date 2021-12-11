const express = require("express");
const router = new express.Router(); //instatiate express router
const shopController = require("../Controllers/shopController")

router.get("/", shopController.middlewareSample, shopController.homePage);
router.get("/auth", shopController.authMiddleware, shopController.authPage);

// router.get("/student/:name", async (req, res) => {
//     try {
//         res.json(req.params.name);
//     } catch (error) {
//         console.log(error);
//     }
// });
module.exports = router;