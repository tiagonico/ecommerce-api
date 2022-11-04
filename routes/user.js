const router = require("express").Router();

router.get("/usertest", (req,res) => {
  res.send("user test ok");
})

router.post("/userposttest", (req,res) => {
  const username = req.body.username
  res.send(username);
})

module.exports = router