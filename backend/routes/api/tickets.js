const { Router } = require("express");
const router = Router();
const dbconnect = require("../../lib/dbConnect");

// View One /tickets

// Obtener Facturas Registradas.

router.get('/tickets_office', async(req, res) => {
  let doc = req.query.doc
  const infotickets = await dbconnect.query ("SELECT ac.name as 'name_cliente', ibc.id_c as 'id', o.name as 'number_factura' , iab.description as 'description', iab.fecha_emision as 'fecha_emision', ias.name as 'name_sorteo', iast.name as 'almacen' FROM accounts as ac INNER JOIN ia_boletas_cstm as ibc ON ac.id = ibc.account_c INNER JOIN opportunities as o ON o.id = ibc.opportunity_id_c INNER JOIN ia_sorteos as ias ON ias.id = ibc.ia_sorteos_id_c INNER JOIN ia_boletas as iab ON iab.id= ibc.id_c INNER JOIN ia_store as iast ON iast.id = ibc.ia_store_id_c WHERE ac.sic_code =" +doc);
  if(infotickets.length > 0){
    res.status(200).json({'responde': infotickets});
  }else{
    let respuesta = {"id":"0","status":"error"};
    res.status(204).json({'responde': respuesta});
  }
});

module.exports = router;
