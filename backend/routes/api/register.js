const { Router } = require("express");
const router = Router();
const bcrypt = require('bcryptjs');
const User = require('./user');
const jwt = require('jwt-simple');
const moment = require('moment');

router.post("/registerformtwo",async(req, res) => {

  try {
    const salt = await bcrypt.genSalt(10);
    req.body.password_c = await bcrypt.hash(req.body.password_c, salt);
    console.log(req.body.password_c)

    const result = User.insert(req.body);

    res.status(200).json(result);

  } catch (error) {
    console.log(error)
  }
})

const createToken = (user) =>{
  let payload = {
    userId: user.id,
    createdAt : moment().unix(),
    expiresAt : moment().add(1, 'day').unix()
  }
  return jwt.encode(payload, "Token-Auth")
}

router.post("/login", async(req,res) =>{
  // let doc = req.query.doc;
  const {
    sic_code,
    password_c
  } = req.body
  const user = await dbconnect.query("SELECT a.id as 'id_user',a.name as 'name_cliente',a.sic_code as 'sic_code', a.password_c as 'password_c',a.phone_office as 'phone_office',ac.pais_c as 'pais', ac.ciudad_c as 'ciudad',ac.departamento_c as 'departamento_c', ac.barrio_c as 'barrio', ac.direccion_c as 'direccion', ac.profesion_c as 'profesion', ac.otraprofesion_c as 'otra_profesion', ac.cualbarrio_c as 'cual_barrio', ac.habeasdata_c as 'habeasdata', ac.tipo_identificacion_c as 'tipo_identificacion', ac.genero_c as 'genero', ac.estadocivil_c as 'estado_civil', ac.celular_c as 'celular', ac.fecha_cumpleanos_c as 'cumpleaños', ac.tipohabeasdata_c as 'tipo_habeas_data', ac.ocupacion_c as 'ocupacion', ac.redes_sociales_c as 'redes_sociales',ac.edades_c as 'edad', ac.ia_mall_id_c as 'ia_mall_id_c', ea.email_address as 'email_address',im.name as 'mall_cliente',u.user_name as 'user.name' FROM accounts as a LEFT JOIN accounts_cstm as ac ON a.id = ac.id_c LEFT JOIN email_addr_bean_rel as eabr ON a.id = eabr.bean_id LEFT JOIN email_addresses as ea ON eabr.email_address_id = ea.id LEFT JOIN ia_mall as im ON ac.ia_mall_id_c = im.id LEFT JOIN users as u ON a.assigned_user_id = u.id WHERE a.sic_code = ?",[sic_code])

  if(user === undefined){
    res.json({
      error : 'Error,email or password not found'
    })
  } else{
    const equals = bcrypt.compareSync(password_c,user.password_c);
    if(!equals){
      res.json({
        error : 'Error,email or password not found'
      });
    } else {
      res.json({
        sucesfull : createToken(user),
        done: 'Login correct'
      });
    }
  }
})  







module.exports = router;
