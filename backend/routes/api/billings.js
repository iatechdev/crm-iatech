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

  //Form of billing

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

  // Get info of billing

  router.get("/rafflemall", async (req, res) => {
    let id_mall = req.query.id_mall;
      const raffle = await dbconnect.query("SELECT * FROM  LEFT JOIN ON  WHERE", id_mall);
      if(raffle.length > 0){
        res.json({'responde':raffle});
    }else{
        let respuesta = {"id":"0","status":"error"};
        res.status(204).json({'responde': respuesta});
    }

  });


module.exports = router;