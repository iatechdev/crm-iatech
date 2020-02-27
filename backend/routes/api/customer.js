//const test= db.query("SELECT  `id`,  `parent_id`,  `date_created`,  `created_by`,  `field_name`,  `data_type`,  `before_value_string`,  `after_value_string`,  LEFT(`before_value_text`, 256),  LEFT(`after_value_text`, 256) FROM `db_nuestroscc`.`accounts_audit` LIMIT 1000");
//console.log(test);

const {Router} = require('express');
const router = Router();
const dbconnect = require('../../lib/dbConnect')

router.get('/authcustomer', async(req, res) => {
    let doc = req.query.doc;
    const customer = await dbconnect.query("SELECT * FROM accounts LEFT JOIN accounts_cstm ON accounts.id = accounts_cstm.id_c LEFT JOIN email_addr_bean_rel ON accounts.id = email_addr_bean_rel.bean_id LEFT JOIN email_addresses ON email_addr_bean_rel.email_address_id  = email_addresses.id WHERE accounts.sic_code ="+doc);
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