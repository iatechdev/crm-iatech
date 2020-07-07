const { Router } = require("express");
const router = Router();
const dbconnect = require("../../lib/dbConnect");

// View One  of the register
router.post("/register_one", async (req, res) => {
  //RECORDAR un metodo para encriptar
  let { name, secondName, email, password } = req.body;

  const newUser = {
    name,
    secondName,
    email,
    password
  };

  try {
    /* Antes de guardar el usuario cifro la contraseña */
    // newUser.password = await encryptPassword(password);
    const registerOne = await dbconnect.query("INSERT INTO (name_table) SET ?", [newUser]);
    newUser.id = registerOne.insertId;
    res.json({
      ok: true,
      newUser
    });

  } catch (error) {
    console.log(error);
  }
});

//Con esta ruta (/genders) obtengo el genero
router.get("/genders", async (req, res) => {
  try {
    const genders = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ genders });
  } catch (error) {
    console.log(error);
  }
});

//Con esta ruta (/genders) obtengo el genero
router.get("/genders", async (req, res) => {
  try {
    const genders = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ genders });
  } catch (error) {
    console.log(error);
  }
});

//Con esta ruta (/statecivil) obtengo el estadocivil
router.get("/statecivil", async (req, res) => {
  try {
    const statecivil = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ statecivil });
  } catch (error) {
    console.log(error);
  }
});

//Con esta ruta (/deparments) obtengo el departamentos
router.get("/deparments", async (req, res) => {
  try {
    const deparments = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ deparments });
  } catch (error) {
    console.log(error);
  }
});

router.get("/cities", async (req, res) => {
  try {
    const cities = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ cities });
  } catch (error) {
    console.log(error);
  }
});

router.get("/neighborhoods", async (req, res) => {
  try {
    const neighborhoods = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ neighborhoods });
  } catch (error) {
    console.log(error);
  }
});

//View Two of register

router.post("/register_two", async (req, res) => {
  let { identification, phone,direction,checkbox } = req.body;
  const registerTwo={identification, phone,direction,checkbox};

try {
  const registersTwo = await dbconnect.query("INSERT INTO (name_table) SET ?", [registerTwo]);
  res.json({ registersTwo });
} catch (error) {
  console.log(error);
}
});

//View Three of register

router.get("/profession", async (req, res) => {
  try {
    const profession = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ profession });
  } catch (error) {
    console.log(error);
  }
});

router.get("/transport", async (req, res) => {
  try {
    const transport = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ transport });
  } catch (error) {
    console.log(error);
  }
});

router.get("/pets", async (req, res) => {
  try {
    const pets = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ pets });
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

router.get("/socialnetwork", async (req, res) => {
  try {
    const socialnetwork = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ socialnetwork });
  } catch (error) {
    console.log(error);
  }
});

router.get("/malls", async (req, res) => {
  try {
    const malls = await dbconnect.query("SELECT * FROM (name_table)");
    res.json({ malls });
  } catch (error) {
    console.log(error);
  }
});

router.post("/register_three", async (req, res) => {
  let { term,checkbox2 } = req.body;
  const registerThree={term,checkbox2};

try {
  const registersThree = await dbconnect.query("INSERT INTO (name_table) SET ?", [registerThree]);
  res.json({ registersThree });
} catch (error) {
  console.log(error);
}
});

module.exports = router;
