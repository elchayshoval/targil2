
let path = require("path");
let express = require("express");
let app = express();
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    let students = [ { name: 'elchay', id:'123', age: 25 }, { name: 'avraham',id:'456' ,age:  27 }, { name: 'shimshon',id:'890' ,age:  80 } ];
    let line = "Students details";
  res.render('index', { students: students, tagline: line });
});

app.get('/about', function(req, res) {
    res.render('about');
});
  
app.listen(8080, function () {
    console.log('Listening on port 8080!');
  });
  
 