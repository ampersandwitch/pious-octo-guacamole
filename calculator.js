const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));

// Basic Addition Calculator

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Your server is running at http://localhost:${port}`)
});

app.post("/", (req, res) => {

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  console.log(req.body);
  res.send('The result of the calculation is ' + result);
})

//BMI Calculator

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {

  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);

  let bmi = weight / (height * height);

  console.log(req.body);
  res.send('Your BMI is ' + bmi);
})
