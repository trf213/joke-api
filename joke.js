const express = require('express')
const router = express.Router();
const jokeJson = require('./joke.json')

router.use(express.urlencoded({'extended': true}));


// Get a random joke 
router.get('/',(req, res)=>{
    let random = Math.floor(Math.random() * jokeJson.length);
    console.log(random);
    res.json(jokeJson[random]);
})

//Get a joke with a particular id 
router.get('/:id', (req, res)=>{
    let myJoke = jokeJson.find(element => element.id === parseInt(req.params.id));
    console.log(myJoke);
    if(myJoke !== undefined && myJoke !== null)
     res.json(myJoke);
    else {
        res.status(400).send('No Joke found')
    }
});

// Handle creating new jokes
router.post('/', (req, res)=>{
    const { type , punchline, setup} = req.body;
    jokeJson.push({
        'id':jokeJson.length+1,
        'type': type,
        'punchline': punchline,
        'setup': setup ?? '',
    });
    res.send('Success');

});






//Handle deleting joke with id 
router.delete('/:id', (req,res)=>{

    const id = req.params.id;
    const tempList = jokeJson.filter(element=>element.id !== parseInt(id));
    console.log(tempList);
    res.send('Deleted')
});


//Update Joke with id 
router.patch('/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    const {type, punchline, setup} = req.body;
    let index = jokeJson.findIndex(element=> element.id === id);

    jokeJson[index].punchline = punchline;
    jokeJson[index].type = type;
    jokeJson[index].setup = setup;

    console.log(jokeJson[index])
    res.send('Updated')
});






module.exports = router;