
var soap = require('soap');
var url = 'http://sdmts.ealert.ws/SDMTSChallenge.asmx?WSDL';
var stop_id = 10772;




var restify = require('restify');

function respond(req, res, next) {
  soap.createClient(url, function(err, client) {
    if (err) throw err;
    //console.log(client.describe());
    client.ProcessStop({StopId: req.params.id}, function(err, result) {
      // result is a javascript object

        var data = result.ProcessStopResult;
	console.log(result);
        res.send(result);
        next();
     })
  });
 
}

var server = restify.createServer();

//Allow Cross Origin Requests
server.use(restify.CORS());
server.use( function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  });

server.get('api/stop/:id', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
