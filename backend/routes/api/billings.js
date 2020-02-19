const { Router } = require("express");
const router = Router();
const dbconnect = require("../../lib/dbConnect");

// View One /billing
router.post("/nameclientbilling", async (req, res) => {
    let { name } = req.body;
    const nameClient={name};

  try {
    const namesClient = await dbconnect.query("INSERT INTO (name_table) SET ?", [nameClient]);
    res.json({ namesClient });
  } catch (error) {
    console.log(error);
  }
});

router.get("/numberbilling", async (req, res) => {
    try {
      const numberbilling = await dbconnect.query("SELECT * FROM accounts limit 10");
      res.json({ numberbilling });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/mall", async (req, res) => {
    try {
      const mall = await dbconnect.query("SELECT * FROM (name_table)");
      res.json({ mall });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/amountbilling", async (req, res) => {
    try {
      const amountbilling = await dbconnect.query("SELECT * FROM accounts");
      res.json({ amountbilling });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/typepets", async (req, res) => {
    try {
      const typepets = await dbconnect.query("SELECT * FROM (name_table)");
      res.json({ typepets });
    } catch (error) {
      console.log(error);
    }
  });   
  
  router.get("/occupation", async (req, res) => {
    try {
      const occupation = await dbconnect.query("SELECT * FROM (name_table)");
      res.json({ occupation });
    } catch (error) {
      console.log(error);
    }
  });   
  router.get("/typeofinformation", async (req, res) => {
    try {
      const typeofinformation = await dbconnect.query("SELECT * FROM (name_table)");
      res.json({ typeofinformation });
    } catch (error) {
      console.log(error);
    }

    //revisar facturas
  });   


module.exports = router;