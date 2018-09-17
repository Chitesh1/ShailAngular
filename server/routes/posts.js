const express = require('express');

const router= express.Router();

//axios for http requests
const axios = require('axios');

//const PostApi = "https://jsonplaceholder.typicode.com";

//Home Page
router.get('/',(req,res)=>{

	res.send('postWorks');
});





module.exports = router;