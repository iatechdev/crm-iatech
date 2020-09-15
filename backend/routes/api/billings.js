const { Router } = require("express");
const router = Router();
const dbconnect = require("../../lib/dbConnect");
const uuid = require("uuid").v4
const { DateTime } = require("luxon");
//const uuid = require("uuid");

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

  // Obtener Sorteos con respecto a los centros comerciales vista billing_two
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

// Obtener Facturas Registradas.

router.get('/infobilling', async(req, res) => {
  let doc = req.query.doc
  const infobilling = await dbconnect.query ("SELECT a.name as 'name_cliente', o.amount as 'Monto', o.id, o.name as 'number_factura' , im.name as 'name_mall', ias.name as 'name_sorteo' FROM accounts as a INNER JOIN accounts_opportunities as ao ON a.id = ao.account_id INNER JOIN opportunities as o ON o.id = ao.opportunity_id INNER JOIN opportunities_cstm as oc ON oc.id_c = o.id INNER JOIN  ia_mall  as im ON oc.ia_mall_id_c= im.id INNER JOIN ia_sorteos as ias ON  oc.ia_sorteos_id_c = ias.id WHERE a.sic_code =" +doc);
  if(infobilling.length > 0){
    res.json({'responde': infobilling});
  }else{
    let respuesta = {"id":"0","status":"error"};
    res.status(204).json({'responde': respuesta});
  }

});

// Registar factiras en la vista billing_two

  router.post('/billing_register', async (req,res) => {
    const id = uuid()
    const id_rel = uuid()
    const date = DateTime.utc().toFormat('yyyy-MM-dd HH:mm');
    // const id_notes = uuid()
    const {
      id_user,
      billing_number,
      amount_billing,
      mall_id,
      sorteo_id,
      event_information,
      // file
    } = req.body

    
    try{
      const billing_form = await dbconnect.query ('INSERT INTO opportunities (id,name,amount,date_entered,date_modified) VALUES (?,?,?,?,?) ',[id, billing_number, amount_billing,date,date]);
      const billing_cstm =await dbconnect.query ('INSERT INTO opportunities_cstm (id_c,ia_mall_id_c,ia_sorteos_id_c,enterastedelenevento_c) VALUES (?,?,?,?)',[id, mall_id, sorteo_id,event_information]);
      const billing_rel = await dbconnect.query('INSERT INTO accounts_opportunities (id,opportunity_id,account_id,date_modified) VALUES (?,?,?,?)',[id_rel,id,id_user,date])
      // const files = await dbconnect.query ('INSERT INTO notes (id,filename) VALUES(?,?)',[id_notes,file])
    
      res.json({
        'responde': 
          billing_form,
          billing_cstm,
          billing_rel,
          // files,
        ok: true
      });
    } catch(error){
      console.log(error);
      res.json(error)
    }
  });




module.exports = router;

  