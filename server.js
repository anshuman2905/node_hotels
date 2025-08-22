const express = require('express')
const app = express()
const port = 3000
const db=require('./db')
const Person=require('./models/Person')
const MenuItem=require('./models/MenuItem')
require('dotenv').config();
const PORT=process.env.PORT||3000;


const bodyParser=require('body-parser')
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome To Anshuman The Dhaba, Ky chahiye Bhai?')
})




const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes);

const MenuItemRoutes=require('./routes/menuRoutes')
app.use('/menu',MenuItemRoutes)


app.listen(PORT,()=>{
    console.log(`Listing on 3000`);
});
