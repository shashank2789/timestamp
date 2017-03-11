'use strict'

var moment = require("moment") 

module.exports =function(app){
    
    var unix=null;
    var natural=null;
    app.get('/:query',function(req,res){
        
        var date=req.params.query;
        //check for unix date
        if(+date>=0){
            unix=+date
        }
        //check for valid natural date
        if(isNaN(date) && moment(date,"MMMM D YYYY").isValid() ){
            unix=+nattounix(date)
            natural=unitonat(unix)
        }
        
        var dataobj={
            "unix":unix,
            "natural":natural
        }
        res.send(dataobj)
        
    });
    
    function nattounix(date){
        return moment(date, "MMMM D, YYYY").format("X");
    }
    
    function unitonat(unix){
        
        return moment.unix(unix).format("MMMM D YYYY");
    }
}

