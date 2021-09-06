const express=require("express");
const db = require("./config/db.config");
const router = require("./routes/customer.router");
const app=express();

app.use(express.json());
app.use("/customer",router);
app.listen(3000,()=>{
    console.log("Server Runnning..!!");
})

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });

