var express = require('express');
var router = express.Router();

var diseaseModel = require("../models/disease");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ "msg" : "API running fine"});
});

router.get('/symptoms/:query' , function(req , res) {
  var symptoms = req.params.query ;
  symptoms = symptoms.split(",");
  console.log(symptoms);
  
  var query = diseaseModel.find({'symptoms' : { $in : symptoms} }); // diseaseModel.find({}) ; // // 

  query.exec(function (err,diseases){
    if(err) res.json({"error" : err});
    console.log(diseases);
    res.json(diseases);
  });
});

router.get("/disease/:name" , function(req,res){
  var disease = req.params.name ;

  var query = diseaseModel.find({"name" : disease});

  query.exec(function (err,disease){
    if(err) res.json({"error" : err});
    if( disease.length === 0){
      res.json({"name" : "Sorry , I dont know about this disease yet!" });
    }else{
      res.json(disease);
    }
  });

})

module.exports = router;
