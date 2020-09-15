//const test= db.query("SELECT  `id`,  `parent_id`,  `date_created`,  `created_by`,  `field_name`,  `data_type`,  `before_value_string`,  `after_value_string`,  LEFT(`before_value_text`, 256),  LEFT(`after_value_text`, 256) FROM `db_nuestroscc`.`accounts_audit` LIMIT 1000");
//console.log(test);

const {Router} = require('express');
const router = Router();
const dbconnect = require('../../lib/dbConnect')

router.get('/authcustomer', async(req, res) => {
    let doc = req.query.doc;
    const customer = await dbconnect.query("SELECT a.id as 'id_user',a.name as 'name_cliente',a.sic_code as 'sic_code',a.phone_office as 'phone_office',ac.pais_c as 'pais', ac.ciudad_c as 'ciudad',ac.departamento_c as 'departamento_c', ac.barrio_c as 'barrio', ac.direccion_c as 'direccion', ac.profesion_c as 'profesion', ac.otraprofesion_c as 'otra_profesion', ac.cualbarrio_c as 'cual_barrio', ac.habeasdata_c as 'habeasdata', ac.tipo_identificacion_c as 'tipo_identificacion', ac.genero_c as 'genero', ac.estadocivil_c as 'estado_civil', ac.celular_c as 'celular', ac.fecha_cumpleanos_c as 'cumpleaños', ac.tipohabeasdata_c as 'tipo_habeas_data', ac.ocupacion_c as 'ocupacion', ac.redes_sociales_c as 'redes_sociales',ac.edades_c as 'edad', ac.ia_mall_id_c as 'ia_mall_id_c', ea.email_address as 'email_address',im.name as 'mall_cliente',u.user_name as 'user.name' FROM accounts as a LEFT JOIN accounts_cstm as ac ON a.id = ac.id_c LEFT JOIN email_addr_bean_rel as eabr ON a.id = eabr.bean_id LEFT JOIN email_addresses as ea ON eabr.email_address_id = ea.id LEFT JOIN ia_mall as im ON ac.ia_mall_id_c = im.id LEFT JOIN users as u ON a.assigned_user_id = u.id WHERE a.sic_code ="+doc);
    if(customer.length > 0){
        res.json({'responde': customer});
    }else{
        let respuesta = {"id":"0","status":"error"};
        res.status(204).json({'responde': respuesta});
    }
    
});

router.get("/customer", async (req, res) => {
    try {
      const numberbilling = await dbconnect.query("SELECT * FROM accounts limit 10");
      res.json({ numberbilling });
    } catch (error) {
      console.log(error);
    }
  });


module.exports= router;

//LEFT JOIN accounts_opportunities ON accounts.id = accounts_opportunities.account_id LEFT JOIN opportunities ON accounts_opportunities.opportunity_id = opportunities.id 