const express = require("express");
const router = express.Router();
const messages = require("../controllers/messages");

/* GET list of Messages*/
router.get("/", messages.getAllMessages);

/*GET one Message*/
router.get("/:id", messages.getOneMessage);

/*POST a new Message*/
router.post("/", messages.addOneMessage);

/*PATCH an Message*/
router.patch("/:id", messages.updateOneMessage);

/*DEL an Message*/
router.delete("/:id", messages.removeOneMessage);

module.exports = router;
