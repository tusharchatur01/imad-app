var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var apps={ 
    'app-one': {
        title: "app-one",
        heading: "app-one",
        date: "26 august",
        content: `         
        <p>
        this is my first application
         </p> `
    },
    'app-two': {
        title: "app-two",
        heading: "app-two",
        date: "27 august",
        content: `         
        <p>
        this is my second application
         </p> `},
    'app-three': {
        title: "app-three",
        heading: "app-three",
        date: "28 august",
        content: `         
        <p>
        this is my thrid application
         </p> `},

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
                      <hr>
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

app.get('/:appname', function (req, res) {
    var appname= req.params.appname;
  res.send(createtemplate(apps[appname]));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
