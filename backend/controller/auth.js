const asyncHandler = require("express-async-handler");


const register = asyncHandler(async(req,res) => {
    const { name, email, password } = req.body;
    console.log("name, email, password => " , name, email, password);
})


module.exports = register