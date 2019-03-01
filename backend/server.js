const express = require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const app = express();
const environment= require('./keys')



// app.use('/', routes);
app.use(cors());
app.use(bodyParser.json());
// Point static path to dist, running ng build creates dist folder
let reqPath = __dirname.substring(0,__dirname.length-7)

console.log(reqPath)
app.use(express.static(path.join(reqPath, '/dist/angular-places-search')));
// app.use(express.static(path.join(__dirname, '..', 'app')));

// let appId = environment.environment.appId;
// let appCode = environment.environment.appCode;
// let URL= `https://places.cit.api.here.com/places/v1/discover/search?app_id={${appId}}&app_code={${appCode}}&in=${wLong},${sLat},${eLong},${nLat}&pretty`

app.get('/api/find/places', (req, res) => { 

   let appId = environment.environment.appId;
   let appCode = environment.environment.appCode;
   let URL= `https://places.cit.api.here.com/places/v1/discover/search?app_id={${appId}}&app_code={${appCode}}&in=${req.query.westLong},${req.query.southLat},${req.query.eastLong},${req.query.northLat}&pretty`
  //res.json()
  
  console.log(URL)
  
}
);


app.get('/test', (req, res) => res.send('Well this route was hit!'));

// CATCH ALL
app.get('*', (req, res) => {
    res.sendFile(path.join(reqPath, 'dist/angular-places-search/index.html'));
  });

app.listen(4000, () => console.log(`Express server running on port 4000`));