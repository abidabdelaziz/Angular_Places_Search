const express = require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const app = express();
const request = require("request")
const environment= require('./keys')


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let reqPath = __dirname.substring(0,__dirname.length-7)

app.use(express.static(path.join(reqPath, '/dist/angular-places-search')));

app.get('/api/find/places', (req, res) => { 

   let appId = environment.environment.appId;
   let appCode = environment.environment.appCode;
   let URL= `https://places.cit.api.here.com/places/v1/discover/search?app_id={${appId}}&app_code={${appCode}}&in=${req.query.westLong},${req.query.southLat},${req.query.eastLong},${req.query.northLat}&pretty`;
  
   console.log(URL)

   request(URL, function (error, response, body) {
        let data={
          body:body,
        };
      console.log(error,response)
      res.send(data);

      });
});


app.get('/test', (req, res) => res.send('Well this route was a hit! Bada....tsss'));

// CATCH ALL
app.get('*', (req, res) => {
    res.sendFile(path.join(reqPath, 'dist/angular-places-search/index.html'));
  });

app.listen(4000, () => console.log(`Express server running on port 4000`));