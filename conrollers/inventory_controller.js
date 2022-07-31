const router = require("express").Router();
const pool = require("../models/db");



router.get("/", async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM inventory");
    console.log(results)
    res.json(results.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router