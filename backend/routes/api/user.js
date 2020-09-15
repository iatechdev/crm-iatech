const { Router } = require("express");
const router = Router();
const dbconnect = require("../../lib/dbConnect");
const uuid = require("uuid").v4;
const { DateTime } = require("luxon");

const insert = ({
  name ,
  apellido_c ,
  email_address,
  password_c,
  tipo_identificacion_c,
  sic_code,
  phone_office,
  celular_c,
  genero_c,
  estadocivil_c,
  pais_c,
  departamento_c,
  ciudad_c,
  barrio_c,
  cualbarrio_c,
  direccion_c,
  habeasdata_c,
  fecha_cumpleanos_c,
  edades_c,
  profesion_c,
  otraprofesion_c,
  redes_sociales_c,
  ia_mall_id_c,
  autoriza_tratamiento_datos_c
}) => {
  return new Promise((resolve, reject) => {
    id = uuid();
    id_mall_rel = uuid();
    id_mall = uuid();
    date = DateTime.utc().toFormat('yyyy-MM-dd HH:mm');
    bean_module = "Accounts";
    tipohabeasdata_c = "digital"

    dbconnect.query("INSERT INTO accounts (id,name,date_entered,date_modified,sic_code,phone_office) VALUE (?,?,?,?,?,?)", [id, name, date, date, sic_code, phone_office]);
    dbconnect.query("INSERT INTO accounts_cstm (id_c,apellido_c,tipo_identificacion_c,celular_c,genero_c,estadocivil_c,pais_c,departamento_c,ciudad_c,barrio_c,cualbarrio_c,direccion_c,habeasdata_c,fecha_cumpleanos_c,edades_c,profesion_c,otraprofesion_c,redes_sociales_c,ia_mall_id_c,tipohabeasdata_c,autoriza_tratamiento_datos_c,password_c) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [id,apellido_c,tipo_identificacion_c,celular_c,genero_c,estadocivil_c,pais_c,departamento_c,ciudad_c,barrio_c,cualbarrio_c,direccion_c,habeasdata_c,fecha_cumpleanos_c,edades_c,profesion_c,otraprofesion_c,redes_sociales_c,ia_mall_id_c,tipohabeasdata_c,autoriza_tratamiento_datos_c,password_c]);
    dbconnect.query('INSERT INTO email_addr_bean_rel (id, email_address_id, bean_id,bean_module) VALUES(?,?,?,?)', [id_mall_rel,id_mall,id,bean_module]);
    dbconnect.query('INSERT INTO email_addresses (id,email_address,date_created,date_modified) VALUES(?,?,?,?)', [id_mall,email_address,date,date]);
    
    (err, result) => {
      if(err) reject(err)
      if(result){
        resolve(result)
      }
    }

  })
}

module.exports = {
  insert:insert
};
