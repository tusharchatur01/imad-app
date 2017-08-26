var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var appone = {
    title: "app-one",
    heading: "app-one",
    date: "26 august",
    content: `         
    <p>
    this is my first application
     </p> `
};


function createtemplate(data){
    var title =  data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmltemplate= `
    <html>
        <head>
            <title>
                ${title};
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
      
        </head>
        <body>
            <div class="container">
                    <div>
                      <a href='/'>home</a>
                    </div>
            </div>
                      <hr>
            <div class="container">
                      <h2>
                        ${heading}
                      </h2>
                      <div>
                      ${date}
                      </div>
                      <div>
                         ${content}
                       </div>
            </div>           
        </body>
    </html>`;
    return htmltemplate;

}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/app-one', function (req, res) {
  res.send(createtemplate(appone));
});

app.get('/app-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app-two.html'));
});

app.get('/app-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app-three.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
