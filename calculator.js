const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); 
//urlencoded to use when we need to process data from a html form


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    
});
app.post("/", function(req, res) {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("The calculation is: " + result);

});
// BMI Calculator

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = Math.floor(weight/Math.pow(height,2));
    bmi = bmi.toFixed(2);
    res.send("Your BMI is: " + bmi);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

