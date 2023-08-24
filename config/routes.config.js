const express = require("express");
const router = express.Router();
const tweets = require("../controllers/tweets.controller");

router.get("/", (req, res) => {
    res.render('home')
});

router.get('/tweets/new', tweets.create)
router.post('/tweets', tweets.doCreate)
router.get('/tweets', tweets.list)
router.post('/tweets/:id/delete', tweets.delete)

module.exports = router;