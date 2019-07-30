let express = require('express'); 
let router = express.Router();

//QueryString => query on the request object
// http://localhost:3000/person?name=ian
router.get('/person', (req, res)=>{
    if(req.query.name){
        res.send(`You  have requested a person ${req.query.name}`)
    }else{
        res.send('You Have requested a person');
    }
})
// http://localhost:3000/person/ian
router.get('/person/:name', (req, res)=>{
    res.send(`You Have requested a person : ${req.params.name}`);
})


module.exports = router