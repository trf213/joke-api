const express = require('express');
const router = express.Router();

const jokeJson = require('./joke.json')
//Get All Jokes with in the joke json file 
router.get('/', (req,res)=>{
    res.send(jokeJson);
})

router.get('/:type', (req,res)=>{
    const {type} = req.params;
    let filteredList =  jokeJson.filter(element => element.type === type);
    console.log(filteredList);

    res.send(filteredList);
})



module.exports = router;