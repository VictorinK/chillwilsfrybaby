const express = require('express') 
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const port_number = server.listen(process.env.PORT || 3000);

app.use(express.json());
app.use(express.static("public"));

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
   res.send('Hello World');
})

// POST method to retrieve param first name, last name, email, date. phone number  
// For the future add more params and then validate on the client end
app.post('/submit', urlencodedParser, function (req, res) {
   
   response = {
      name: req.body.name,
      
      email: req.body.email,
      
      phone_number: req.body.phone_number
   };
    
   console.log(response);
  //For the user, send a copy of the booking date to user and then 
   res.send(JSON.stringify(response));
})



 app.listen(port_number, function () {
  console.log("app listening ")
   
   
})
