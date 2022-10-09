
const express = require('express');
const router = express.Router();

// 1.import schmea that you have created
const signupTemplate = require('../models/SignupModels')

// post : first argument is path,second argument is callback function
// it has 2 paramaters request and response
router.post('/signup', (request, response) => {
    //2.create variable that is instance of signuptemplatecopy
    //so it is your schema
    //when the user in /signup path and after filling form fields
    //when user clicks send or signup the post request will be made
    //post request will come to the server
    //router.post will run and the new schema will be created
    const signedupUser = new signupTemplate({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signedupUser.save().then((data) => response.json(data)).catch((error) => response.json(error))
})
router.get('/fetch/:username', (req, res) => {
    fetchid = req.params.username;
    signupTemplate.find(({username:fetchid}),(err, val) => {
        if(err) {
            res.send("errroor")
        }
        else{
            if(val.length == 0) {
                res.send("data does not excists")
            }
            else{
                res.send(val)
            }
        }
    })
})


// exporting like
module.exports = router