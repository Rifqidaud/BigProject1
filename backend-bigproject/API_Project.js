module.exports = {
    router : router,
    exampleFunction : exampleFunction
}

router.get('/api/example', function(req, res){
    exampleFunction(req.query, function(err, doc){
        if(err)
            console.log(err);
        response.status(200).json(doc);
    })
});

function exampleFunction(query, next) {
   //MongoDB Code to fetch a certain doc
   exampleModel.find(query.key)
   .then(function(err,doc) {
       if(err)
           return next(err,null);
       return next(null, doc);
   })
}



//page with read call

var readPage = require('readPage');
function useRead(){
    readPage.exampleFunction({query:{key:'abcd'}},function(err, doc){
        if(err)
             console.log(err);
        useJSON(doc)
    });
}
router.get('/api/example', function(req, res){
    exampleFunction(req.query, function(err, doc){
        if(err)
            console.log(err);
        response.status(200).json(doc);
    })
});
async function getAPI() {
    try {
      const res = await axios.post('/path/to/api'); // Doesn't require server remote url as it is relative
    } catch (e) {
      console.log(e);
    }
 }
 const axios = require('axios'); // I am using axios. Use whatever you require
