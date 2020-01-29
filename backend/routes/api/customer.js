//const test= db.query("SELECT  `id`,  `parent_id`,  `date_created`,  `created_by`,  `field_name`,  `data_type`,  `before_value_string`,  `after_value_string`,  LEFT(`before_value_text`, 256),  LEFT(`after_value_text`, 256) FROM `db_nuestroscc`.`accounts_audit` LIMIT 1000");
//console.log(test);


const {Router} = require('express');
const router = Router();
const dbconnect = require('../../lib/dbConnect')

router.get('/customer', async(req, res) => {
    const customer = await dbconnect.query("SELECT  `id`,  `parent_id`,  `date_created`,  `created_by`,  `field_name`,  `data_type`,  `before_value_string`,  `after_value_string`,  LEFT(`before_value_text`, 256),  LEFT(`after_value_text`, 256) FROM `db_nuestroscc`.`accounts_audit` LIMIT 1000");
    res.json({'responde': customer});
    console.log(customer);
});



module.exports= router;