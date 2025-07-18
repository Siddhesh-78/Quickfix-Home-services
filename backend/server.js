import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())
const port = 3000;



// Create a SQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quickfix"
});

//middleware

//signup validation
const validateSignup = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters" });
  }
  next();
};

//login validation
const validatelogin = (req,res,next) => {
    const { name, email , password} = req.body;
    if(!name || !email || !password){
      return res.status(400).json({error: "All fields are required"})
    }
    if(password.length < 6){
      return res.status(400).json({error: "Password must be at least 6 characters"})
    }
    next();
}

//booking validation
const validatebooking= (req,res,next)=>{
  const {name,email,mobilenumber,address,servicedate} = req.body;
  if(!name || !email || !mobilenumber || !address || !servicedate){
    return res.status(400).json({error: "All fields are required"})
  }
  next()
}

//routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Signup route
app.post('/signup', validateSignup ,(req, res) => {
  const sql = 'INSERT INTO signup (name, email, password) VALUES (?, ?, ?)';
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ];

  db.query(sql, values, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    return res.json({ message: "Account has been created", data });
  });
});

//Login route
app.post('/login',validatelogin,(req, res) => {
  const sql = 'select * from signup where name = ? and email = ? and password = ?';
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ];

  db.query(sql, values,(err, data)=>{
    if (err) return res.status(500).json({ error: err });
    return res.json({message: "Login successful", data});
  })
})

//electrician route
app.post('/electricianbooks',validatebooking, (req, res) => {
  const sql = 'Insert into electricianbooking (name,email, mobilenumber, address, servicedate) VALUES (?, ?, ?, ?, ?)';
  const values = [
    req.body.name,
    req.body.email,
    req.body.mobilenumber,
    req.body.address,
    req.body.servicedate
  ]

  db.query(sql, values, (err,data)=>{
    if(err) return res.status(500).json({error:err})
    return res.json({message: "Electrician has been booked", data})
  })
})

//plumber booking
app.post('/plumberbooks', (req, res) => {
  const sql = 'INSERT INTO plumberbooks (name, email, mobilenumber, address, servicedate) VALUES (?, ?, ?, ?, ?)';
  const values = [
    req.body.name,
    req.body.email,
    req.body.mobilenumber,
    req.body.address,
    req.body.servicedate
  ];

  db.query(sql, values, (err, data) => {
     if(err) return res.status(500).json({error:err})
      return res.json({message: "Cleaner has been booked", data})
  });
});


//cleaner booking
app.post('/cleaningbooks',validatebooking, (req, res) => {
  const sql = 'Insert into cleanerbooking (name,email, mobilenumber, address, servicedate) VALUES (?, ?, ?, ?, ?)';
  const values = [
    req.body.name,
    req.body.email,
    req.body.mobilenumber,
    req.body.address,
    req.body.servicedate
  ]
  db.query(sql, values,(err,data)=>{
    if(err) return res.status(500).json({error:err})
      return res.json({message: "Cleaner has been booked", data})
  })
})

//admindashboard
app.get('/admindashboard', (req, res) => {
 const sql = `
    SELECT *, 'Cleaner' as service_type FROM cleanerbooking
UNION
SELECT *, 'Plumber' as service_type FROM plumberbooks
UNION
SELECT *, 'Electrician' as service_type FROM electricianbooking;

  `;
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error in /admindashboard:", err);
      return res.status(500).json({ error: err });
    }
    return res.json(data);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
