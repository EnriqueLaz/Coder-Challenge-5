const { Router } = require("express");
const functions = require("../functions/prodFunctions");
const router = Router();

router.get("/", functions.getAll);
router.get("/add", functions.form);
router.post("/add", functions.add);

module.exports = router;