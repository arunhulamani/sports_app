var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('', ['sports_type']);

//Get all users
router.get('/sports',(req, res, next)=>{
    db.sports_type.find(function(err, sports){
        if(err){
            res.send(err);
        }
        else{
            res.json(sports);
        }
    });

});


module.exports = router;