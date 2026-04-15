const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Swikrit:A1A2A3A4@cluster0.fty6ysh.mongodb.net/mydb')
.then(() => console.log("✅ Connected"))
.catch(err => console.log(err));