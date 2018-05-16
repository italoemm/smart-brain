const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors()); // it's going grant access to use this server to get and send information

const database = {
    users: [{
                id: '1',
                name: 'italo',
                email: 'italo@hotmail.com',
                password: '123456',
                entries: 0,
                joined: new Date()
            },
            {
                id: '2',
                name: 'agueda',
                email: 'agueda@hotmail.com',
                password: '123456',
                entries: 0,
                joined: new Date()
            } ]
}
// show all user
// "get" cause it's going make request through URL
app.get('/', (req,res) => {
    res.json(database.users)
});

// search for user
// "get" cause it's going make request and send data through URL
app.get('/profile/:id', (req,res) => {
    const {id} = req.params // get from URL
    
    const user = database.users.filter((user) => user.id === id) // filter return a array not object
    
    if(user === undefined){
        res.json('user not found');
    }else{
         res.json(user);
    }
});

// how many times the user's image was searched
// "put" beacause it's going be incremented on web site ,other words it is going be altered

app.put('/image', (req,res) => {
    const {id} = req.body // get from body
    
    const user = database.users.filter((user) => user.id === id) // referring to the object that match with ID
    
    if(user === undefined){
        res.json('user not found');
    }else{
         res.json(user[0].entries++);
    }
});

// response with a user if it match with database's user and browser's user
// "post" cause it's going make request and send data through form or json
app.post('/signin', (req,res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
          res.send('sucess')
    }else{
       res.status(400).json('email or password invalid')
    }
});


// register in database a browser's user
// "post" cause it's going make request and send data through form or json
app.post('/register', (req,res) => {
    const { name, email, password} = req.body
    
    database.users.push(
        {
            id: '3',
            name: name,
            email: email,
            password: password,
            entries: 0,
            joined: new Date()
        })
            res.json(database.users[database.users.length-1]);
});

app.listen(3000,() => console.log('it is running'));



/*
req.params
    This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
    
req.body
    Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.*/