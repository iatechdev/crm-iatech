const { Router } = require("express");
const router = Router();
const dbconnect = require("../../lib/dbConnect");

// View One /billing

  //Obtener Lista de Centro Comerciales
  router.get("/mall", async (req, res) => {
    try {
      const mall = await dbconnect.query("SELECT * FROM ia_mall");
      res.json({ mall });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/rafflemall", async (req, res) => {
    let id_mall = req.query.id_mall;
      const raffle = await dbconnect.query("SELECT * FROM ia_sorteos_ia_mall_1_c LEFT JOIN ia_sorteos ON ia_sorteos.id=ia_sorteos_ia_mall_1_c.ia_sorteos_ia_mall_1ia_sorteos_ida WHERE ia_sorteos_ia_mall_1_c.ia_sorteos_ia_mall_1ia_mall_idb= ?", id_mall);
      if(raffle.length > 0){
        res.json({'responde':raffle});
    }else{
        let respuesta = {"id":"0","status":"error"};
        res.status(204).json({'responde': respuesta});
    }

  });

  //SELECT * FROM ia_mall LEFT JOIN ia_sorteos_ia_mall_1_c ON id_mall.id= ia_sorteos_ia_mall_1_c.ia_sorteos_ia_mall_1ia_mall_idb LEFT JOIN ia_sorteos ON ia_sorteos_ia_mall_1_c.ia_sorteos_ia_mall_1ia_sorteos_ida=ia_sorteos.id WHERE ia_mall.name ="+id_mall

  /*router.get("/amountbilling", async (req, res) => {
    try {
      const amountbilling = await dbconnect.query("SELECT * FROM (name_table)");
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
  });   */


module.exports = router;