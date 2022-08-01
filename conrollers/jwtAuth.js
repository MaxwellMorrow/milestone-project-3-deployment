const router = require("express").Router()
const pool = require("../models/db")
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator")
const authorization = require("../middleware/authorization")

// registering
router.post("/register",async (req,res)=>{
    try{
        // 1. desctucture the req.body
        const { email, firstname, lastname, password, role} = req.body;
        // check if user exists (if user exists throw error)
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        if(user.rows.length !== 0){
            return res.status(401).send("User already exists")
        }
        // bcrypt the users password on the DB
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password,salt);
        // enter the new user inside the DB
        const newUser = await pool.query("INSERT INTO users (email,firstname,lastname,passworddigest,roles) VALUES ($1,$2,$3,$4,$5) RETURNING *",[email,firstname,lastname,bcryptPassword,role])

        // generate the JWT token
        const token = jwtGenerator(newUser.rows[0].email)
        res.json({token})

    }catch(err){
        console.log(err.message)
        res.status(500).send("Server Error")
    }
})


router.post("/login", async (req,res)=>{
    try{
        // destructure req.body
        const {email,password} = req.body;

        // check if user doesnt exist
        const user = await pool.query("SELECT * FROM users WHERE email = $1",[email]);

        if(user.rows.length === 0){
            return res.status(401).send("Incorrect Password or Email")
        }
        // check if incomming password is the same as the DB password
        const validPassword = await bcrypt.compare(password,user.rows[0].passworddigest);
        
       
        if(!validPassword){
            return res.status(401).send("Incorrect Password or Email");
        }

        // give them the jwt token

        const token = jwtGenerator(user.rows[0].email);
        res.json({ token });

    }catch(err){
        console.log(err.message);
        res.status(500).send("server error")
    }
})

router.get("/is-verify",authorization,async(req,res)=>{
    try {
        res.json(true)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("server error");
    }
})

module.exports = router